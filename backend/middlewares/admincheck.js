const jwt = require("jsonwebtoken");
const { userSchema } = require("../model/dbSchema");
const adminCheck = async(req, res, next) => {
 
  try {
    const user=await userSchema.findOne({_id:req.user.id });

    // console.log(req.user);
    // console.log(user);

    if(!user.isAdmin) return res.status(400).json({msg:'cannot access without admin'});
    next();
  
 
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = adminCheck;
