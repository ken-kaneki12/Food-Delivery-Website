const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/hidden.env" });

const { userSchema } = require("../model/dbSchema");


const userCtrl = {

  getSingleUser: async (req, res) => {
    try {
        const user = await userSchema.findById(req.user.id).select('-password').select('-confirm_password')

        res.status(200).json(user)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},
getAllUsers: async (req, res) => {
    try {
        const users = await userSchema.find().select('-password').select('-confirm_password')

        res.status(200).json(users)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},

updateUser: async (req, res) => {
    try {
        const {name, avatar} = req.body
        await userSchema.findOneAndUpdate({_id: req.user.id}, {
            name, avatar
        })

        res.status(200).json({msg: "Update Success!"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},

updateUsersRole: async (req, res) => {
    try {
        const {role} = req.body

        await userSchema.findOneAndUpdate({_id: req.params.id}, {
            role
        })

        res.json({msg: "Update Success!"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},

deleteUser: async (req, res) => {
    try {
        await userSchema.findByIdAndDelete(req.params.id)

        res.json({msg: "Deleted Success!"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},
  
  

};

module.exports = userCtrl;
