const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/hidden.env" });
const { accessTokenGen, refreshTokenGen } = require("../token/createToken");
const { registervalidate, loginvalidate } = require("../validator/validate");

const { userSchema } = require("../model/dbSchema");

const userCtrl = {
  register: async (req, res) => {
    console.log(req.body)
    const { error } = registervalidate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    // check duplicate email or email already in database
    const emailchek = await userSchema.findOne({ email: req.body.email });

    if (emailchek) return res.status(400).send("email already exist");

    const { name, email, password, confirm_password, isAdmin } = req.body;

    //password check
    if (password == confirm_password) {
      const password = await bcrypt.hash(req.body.password, 10);
      const confirm_password = await bcrypt.hash(req.body.confirm_password, 10);

      const obj = new userSchema({
        name,
        email,
        password,
        confirm_password,
        isAdmin
      });

      try {
        const createUser = await obj.save();

        // res.status(200).json(createUser);
        res.status(200).send('Registration Success');
      } catch (err) {
        res.status(500).send(err);
      }
    } else {
      res.status(400).send("password does not match");
    }
  },

  login: async (req, res) => {
    const { error } = loginvalidate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const user = await userSchema.findOne({ email: req.body.email });

    // check user exist or not
    if (!user) return res.status(400).send("Email  wrong");

    // password check
    const validpass = await bcrypt.compare(req.body.password, user.password);

    if (!validpass) return res.status(400).send("Password wrong");
    const { password, ...others } = user._doc;

    const asToken = accessTokenGen({
      id: user.id,
      email: user.email
    });

    const rfToken = refreshTokenGen({
      id: user.id,
      email: user.email
    });

  res.cookie("rfToken", rfToken, {
      httpOnly: true,
      path: "/refreshToken"
    });

  res.header('auth-token',asToken);
  // res .status(200).json({ ...others, asToken});
   res .status(200).send('Login success');

  },

  logout: async(req,res)=>{
   try{
    res.clearCookie('rfToken',{path: "/refreshToken"});
    return res.status(200).send('logout success');
   }catch(err){
   return res.status(500).send({ error: err.message });
   }
  }, 

  userdetails: async(req,res)=>{
     try{
     const user= await userSchema.findOne({_id:req.user.id}).select('-password').select('-confirm_password');
     if(!user)return res.status(400).send("user doesn't exist ");
     else{
      res.status(200).json(user);
     }  
     }catch(err){
    return res.status(500).json({error:err});
     }
  },

  refreshToken: async (req, res) => {
    try {
    const rt=req.cookies.rfToken;
    if(!rt)return res.status(400).send("please login or register");
    //  console.log(rt);
    // console.log( process.env.refresh_token);

      if (rt) {
        const vrfToken =jwt.verify(rt, process.env.refresh_token);
        if(!vrfToken.id ) return res.status(400).send("please login or register");
        else  {
           const acessrfToken=accessTokenGen({id:vrfToken.id});
           const refresh_token=refreshTokenGen({id:vrfToken.id});
           res.status(200).json({vrfToken,acessrfToken,refresh_token});
        } 
      
      }
     
    
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
};

module.exports = userCtrl;
