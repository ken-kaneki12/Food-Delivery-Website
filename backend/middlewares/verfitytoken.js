const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.header("auth-token");
  // console.log(token)
  
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, process.env.access_token);
    //  console.log(verified);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
module.exports = auth;
