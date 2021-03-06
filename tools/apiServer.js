/*
This uses json-server, but with the module approach: https://github.com/typicode/json-server#module
Downside: You can't pass the json-server command line options.
Instead, can override some defaults by passing a config object to jsonServer.defaults();
You have to check the source code to set some items.
Examples:
Validation/Customization: https://github.com/typicode/json-server/issues/266
Delay: https://github.com/typicode/json-server/issues/534
ID: https://github.com/typicode/json-server/issues/613#issuecomment-325393041
Relevant source code: https://github.com/typicode/json-server/blob/master/src/cli/run.js
*/

/* eslint-disable no-console */

const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const bcrypt = require("bcrypt");
const multer = require("multer");
const data = require("./db.json");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")("sk_test_E4e0J5dFPh53uXECMVYASnSF007jxl702a");
const { v4: uuidv4 } = require("uuid");
var nodemailer = require("nodemailer");
const config = require("../config/config");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter // this saves your file into a directory called "uploads"
});
// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function (req, res, next) {
  setTimeout(next, 2000);
});

// Declaring custom routes below. Add custom routes before JSON Server router

// Add createdAt to all POSTS
//To verify the password later on:

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});
// CREATE COURSES ROUTE...
server.post("/courses/", function (req, res, next) {
  const error = validateCourse(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.title); // Generate a slug for new courses.
    next();
  }
});

// REGISTER USER ROUTE....
server.post("/users/", upload.single("file"), function (req, res, next) {
  console.log(req.file);
  const error = validateUser(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    next();
  }
});

// LOGIN USER ROUTE ...
server.post("/api/auth", function (req, res, next) {
  console.log(req);
  const error = validateUserCredentials(req.body.user);
  if (error) {
    res.status(400).send(error);
  } else {
    if (data.users.some(el => el.email === req.body.user.email)) {
      const user = data.users.filter(d => d.email === req.body.user.email);
      console.log(user);
      bcrypt.compare(
        req.body.user.password,
        user[0].password,
        (error, result) => {
          if (result === true) {
            const token = jwt.sign({ user }, config.jwtSecret, {
              expiresIn: 60 * 60
            });

            return res.status(200).json({ token });
          } else {
            return res.status(403).json(`Access Denied`);
          }
        }
      );
    } else {
      return res.status(403).json(`Access Denied`);
    }
  }
});

server.post("/contact", function (req, res, next) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: req.body.data.email,
      pass: config.pass
    }
  });

  let mailOptions = {
    from: req.body.data.email,
    to: req.body.data.email,
    subject: req.body.data.subject,
    text: req.body.data.message
  };

  transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
      console.log("Error in sending Email");
    } else {
      console.log("Email Sent");
    }
  });

  res.json({
    message: "Email Sent"
  });
});

server.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { email, id, card, cart } = req.body.data;
    console.log(email, id, cart);
    const customer = await stripe.customers.create({
      email: email,
      source: id
    });

    const idempotencyKey = uuidv4();
    const total = cart.reduce((a, c) => a + c.price * c.units, 0);
    console.log("TOTAL is : ", total);
    const charge = await stripe.charges.create(
      {
        amount: total * 100,
        currency: "AUD",
        customer: customer.id,
        receipt_email: email,
        description: `Purchased Online Course`,
        shipping: {
          name: card.name,
          address: {
            line1: card.address_line1,
            line2: card.address_line2,
            city: card.address_city,
            country: card.address_country,
            postal_code: card.address_zip
          }
        }
      },
      {
        idempotencyKey
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

// Use default router
server.use(router);

// Start server
const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// Centralized logic

// Returns a URL friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function validateCourse(course) {
  if (!course.title) return "Title is required.";
  if (!course.authorId) return "Author is required.";
  if (!course.categoryId) return "Category is required.";
  return "";
}

function validateUserCredentials(user) {
  if (!user.email) return "Email is required.";
  if (!user.password) return "Password is required.";
  return "";
}

function validateUser(user) {
  if (data.users.some(el => el.email === user.email))
    return "Username already exists";
  if (!user.email) return "Email is required.";
  if (!user.password) return "Password is required.";
  return "";
}
