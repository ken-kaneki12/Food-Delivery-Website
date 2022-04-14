const {restSchema}=require('../model/dbSchema')

const restaurantCtrl = {

    postRest: async (req, res) => {
        try {
          const {  RestId, RestName, RestEmail, RestLocation,RestDescription,RestRating,RestImg } = req.body;
        //   console.log(req.body)
          const emailchek = await restSchema.findOne({ RestEmail });
          if (emailchek) return res.status(400).send("Restaurant_email already exist");
          //password check

            const obj = new restSchema({
                RestId,
                 RestName, 
                 RestEmail, 
                 RestLocation,
                 RestDescription,
                 RestRating,
                 RestImg
            });
        //  console.log(obj)
            await obj.save();

            // const createUser = await obj.save();
            res .status(200).send("new restaurant add");
         
        } catch (err) {
          res.status(500).send(err);
        }
      },


//     getSingleUser: async (req, res) => {
//       try {
//           const user = await userSchema.findById(req.user.id).select('-password').select('-confirm_password')
  
//           res.status(200).json(user)
//       } catch (err) {
//           return res.status(500).json({msg: err.message})
//       }
//   },

  getAllRest: async (req, res) => {
      try {
          const rests = await restSchema.find()
  
          res.status(200).json(rests)
      } catch (err) {
          return res.status(500).json({msg: err.message})
      }
  },
  
//   updateUser: async (req, res) => {
//       try {
//           const {name, avatar} = req.body
//           await userSchema.findOneAndUpdate({_id: req.user.id}, {
//               name, avatar
//           })
  
//           res.status(200).json({msg: "Update Success!"})
//       } catch (err) {
//           return res.status(500).json({msg: err.message})
//       }
//   },
  
//   updateUsersRole: async (req, res) => {
//       try {
//           const {role} = req.body
  
//           await userSchema.findOneAndUpdate({_id: req.params.id}, {
//               role
//           })
  
//           res.json({msg: "Update Success!"})
//       } catch (err) {
//           return res.status(500).json({msg: err.message})
//       }
//   },
  
//   deleteUser: async (req, res) => {
//       try {
//           await userSchema.findByIdAndDelete(req.params.id)
  
//           res.json({msg: "Deleted Success!"})
//       } catch (err) {
//           return res.status(500).json({msg: err.message})
//       }
//   },
    
    
  
  };
  
  module.exports = restaurantCtrl;
  