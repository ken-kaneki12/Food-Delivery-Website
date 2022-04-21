const {cartSchema}=require('../model/dbSchema')

//CREATE

const cartCtrl = {

postCart: async (req, res) => {
    //  res.status(200).send('emmmmmm');
    const userId=req.user.id;
    // console.log(userId);
    const cartItems=req.body.cartItems;
  const obj = new cartSchema({
    userId,
    cartItems  
  });

  try {
    const savedCart = await obj.save();
    res.status(200).json(savedCart);
  
  } catch (err) {
    res.status(500).json(err);
  }
},

updateCart: async (req, res) => {
    try {
        const updatedCart = await cartSchema.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCart);
      } catch (err) {
        res.status(500).json(err);
      }
    },

  deleteCart: async (req, res) => {
    try {
        await cartSchema.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
  },

 getCart: async (req, res) => {
    try {
        const cart = await cartSchema.findById(req.params.id);
        res.status(200).json(cart);
      } catch (err) {
        res.status(500).json(err);
      }
  },

}  
  module.exports = cartCtrl;
  



// // //GET ALL

// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const carts = await Cart.find();
//     res.status(200).json(carts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;