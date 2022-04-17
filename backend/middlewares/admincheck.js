
const { userSchema } = require("../model/dbSchema");
const adminCheck = async(req, res, next) => {
 
  try {
    const user=await userSchema.findOne({_id:req.user.id });

   if(user.role===1){
    next()
   }
   
  else return res.status(400).json({msg:'u are not allowed'});

}catch (err) {
    res.status(400).send(err);
  }
};
module.exports = adminCheck;
