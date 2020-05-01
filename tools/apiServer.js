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
const data = require("./db.json");
const jwt = require("jsonwebtoken");
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

server.post("/courses/", function (req, res, next) {
  const error = validateCourse(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.title); // Generate a slug for new courses.
    next();
  }
});

server.post("/users/", function (req, res, next) {
  const error = validateUser(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    next();
  }
});

server.post("/login/", function (req, res, next) {
  // Validate email and password shouldn't be blank
  //
  const error = validateUserCredentials(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    if (data.users.some(el => el.email === req.body.email)) {
      const ss = data.users.filter(d => d.email === req.body.email);
      bcrypt.compare(req.body.password, ss[0].password, (error, result) => {
        if (result === true) {
          const token = jwt.sign(
            {
              ss
            },
            "secret",
            { expiresIn: "1h" }
          );

          return res.status(200).json({
            token: token
          });
        } else {
          return next(error);
        }
      });
    } else {
      return next(error);
    }
  }
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
