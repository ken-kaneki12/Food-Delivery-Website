const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.header("auth-token");
  // console.log(token)
  
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, process.env.access_token);
    //  console.log(verified);
    req.user = verified; //store jwt payload data
    // console.log(req.user)
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

const authVerify = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = auth;
