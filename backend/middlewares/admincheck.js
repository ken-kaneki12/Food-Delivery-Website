const jwt = require("jsonwebtoken");
const { userSchema } = require("../model/dbSchema");
const adminCheck = async(req, res, next) => {
 
  try {
    const user=await userSchema.findOne({_id:req.user.id });

    // console.log(req.user);
    // console.log(user);
   if(req.user.id===req.params.id || req.user.isAdmin)
      next()
  else return res.status(400).json({msg:'u are not allowed'});

}catch (err) {
    res.status(400).send(err);
  }
};
module.exports = adminCheck;
