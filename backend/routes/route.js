
const router=require('express').Router();
const verify=require('../middlewares/verfitytoken');
const adminCheck=require('../middlewares/admincheck');
const foodsCtrl = require('../controllers/foodControl');
const userCtrl=require('../controllers/userControl');


//foods crud routes
router.get('/getFoods',foodsCtrl.getFood);// or router.route('/').get(controls.getProducts)

router.post("/postFood",verify,adminCheck,foodsCtrl.postFood);

// router.route('/postFood').post(verify,adminCheck,foodsCtrl.postFood)

router.patch("/updateFood/:postId",foodsCtrl.updateFood);

router.delete("/deleteFood/:postId",foodsCtrl.deleteFood);

//user and admin crud routes
router.post("/register",userCtrl.register);

router.post("/login",userCtrl.login);

router.get('/logout',userCtrl.logout);

router.delete('/userDelete/:id',verify,adminCheck,userCtrl.userDelete);

router.get('/userdetails',verify,userCtrl.userdetails);

router.get('/refreshToken',userCtrl.refreshToken);

  
module.exports = router;
