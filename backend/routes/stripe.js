// const router = require("express").Router();
// const dotenv = require("dotenv");
// const { v4: uuidv4 } = require('uuid');
// const idempontencykey=uuidv4();
// dotenv.config({ path: "./config/hidden.env" });
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// router.post("/payment", (req, res) => {
//   const{product,token}=req.body
//   console.log(product);
//   return stripe.customer.create({
//     email:token.email,
//     source:token.id
//   }).then(customer=>{
//     stripe.charges.create({
//       amount:product.price * 100,
//       currency:'usd',
//       customer:customer.id,
//       receipt_email:token.email,
//       shipping:{
//         name:token.card.name,
//         address:{
//           country:token.card.address_country,

//         }
//       }
      

//     },{idempontencykey})
//   })
//   .then(result=>res.status(200).json(result))
//   .catch(err=>console.log(err))
// });

// module.exports = router;

const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/hidden.env" });
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, resp) => {
  const { token, currency, price } = req.body;
  const charge = await stripe.charges.create({
    amount: price,
    currency: "usd",
    source: token,
  });

  if (!charge) throw new Error("charge unsuccessful");
});


module.exports = router;