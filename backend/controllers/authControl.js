const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const sendEmail=require('../utils/sendMail')
// const sendEmail2=require('../utils/sendMail2')
dotenv.config({ path: "./config/hidden.env" });
const { accessTokenGen, refreshTokenGen,activationTokenGen } = require("../token/createToken");
const { registervalidate, loginvalidate } = require("../validator/validate");
const { userSchema } = require("../model/dbSchema");
const authCtrl = {

  register: async (req, res) => {
    try {
      const { error } = registervalidate(req.body);

      if (error) return res.status(400).send(error.details[0].message);

      const { name, email, password, confirm_password, role } = req.body;
      const emailchek = await userSchema.findOne({ email });

      if (emailchek) return res.status(400).send("email already exist");
      //password check
      if (password == confirm_password) {
        const password = await bcrypt.hash(req.body.password, 10);
        const confirm_password = await bcrypt.hash(
          req.body.confirm_password,  10);
        const obj = {
          name,
          email,
          password,
          confirm_password
        };

        const activation_token = activationTokenGen(obj);

        const clientUrl = `${process.env.client_url}/activate/${activation_token}`;
        sendEmail(email, clientUrl, "verify your email");

        // const createUser = await obj.save();
        res .status(200).send("Check your email.");
      } else {
        res.status(400).send("password does not match");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },

  activateEmail: async (req, res) => {
    try {
      const { activation_token } = req.body;
      const user = jwt.verify(activation_token, process.env.activation_token);

      const { name, email, password, confirm_password, role } = user;
    //   console.log(user);
      // check duplicate email or email already in database
    

      const obj = new userSchema({
        name,
        email,
        password,
        confirm_password,
        role
      });

      await obj.save();

      res.json({ msg: "Account has been activated!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    const { error } = loginvalidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
      const user = await userSchema.findOne({ email: req.body.email });

      // check user exist or not
      if (!user) return res.status(400).send("Email  wrong");

      // password check
      const validpass = await bcrypt.compare(req.body.password, user.password);

      if (!validpass) return res.status(400).send("Password wrong");
      const { password, ...others } = user._doc;

      const rfToken = refreshTokenGen({
        id: user.id
      });

      res.cookie("rfToken", rfToken, {
        httpOnly: true,
        // path: "/refreshToken",
        // maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
        expires:new Date(Date.now()+25892000000)
      });

      // res .status(200).json({ ...others, asToken});
      res.status(200).send("Login success");
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("rfToken", { path: "/refreshToken" });
      return res.status(200).send("logout success");
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await userSchema.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "This email does not exist." });

      const asToken = accessTokenGen({
        id: user.id,
      });

      res.header("auth-token", asToken);
      // console.log(asToken)
      const url = `${process.env.client_url}/reset/${asToken}`;

      sendEmail(email, url, "Reset your password");
      res.json({ msg: "Re-send the password, please check your email." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { password } = req.body;
    //   console.log(password);
      // const token = req.header("Authorization");
      // console.log(token)
      const passwordHash = await bcrypt.hash(password, 10);

      await userSchema.findOneAndUpdate({ _id: req.user.id },
        {
          
          password: passwordHash,
          confirm_password: passwordHash,
        }
      );

      res.json({ msg: "Password successfully changed!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAccessToken: (req, res) => {
    try {
        const rf_token = req.cookies.rfToken
        if(!rf_token) return res.status(400).json({msg: "Please login now!"})

        jwt.verify(rf_token, process.env.refresh_token, (err, user) => {
            if(err) return res.status(400).json({msg: "Please login now!"})

            const access_token = accessTokenGen({id: user.id})
            res.json({access_token})
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},
}
module.exports = authCtrl;
