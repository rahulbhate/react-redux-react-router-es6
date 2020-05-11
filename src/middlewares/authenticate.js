import jwt from "jsonwebtoken";
import config from "../../config/config";
export default (req, res, next) => {
  const authenticationHeader = req.headers["authorization"];
  let token = localStorage.getItem("jwtToken");
  if (token) {
    res.status(200).json({ token: "Token Exists" });
  } else {
    res.status(403).json({
      error: "No token"
    });
  }
  if (authenticationHeader) {
    token = authenticationHeader.split("")[1];
  }
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Failed to authenticate" });
      } else {
        // check user exists in db.json
      }
    });
  } else {
    res.status(403).json({
      error: "No token"
    });
  }
};
