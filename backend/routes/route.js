const router = require("express").Router();
const verify = require("../middlewares/verfitytoken");
const adminCheck = require("../middlewares/admincheck");
const foodsCtrl = require("../controllers/foodControl");
const userCtrl = require("../controllers/userControl");
const authCtrl = require("../controllers/authControl");

//foods crud routes
router.get("/getFoods", foodsCtrl.getFood); // or router.route('/').get(controls.getProducts)

router.post("/postFood", verify, adminCheck, foodsCtrl.postFood);

// router.route('/postFood').post(verify,adminCheck,foodsCtrl.postFood)

router.patch("/updateFood/:postId", foodsCtrl.updateFood);

router.delete("/deleteFood/:postId", foodsCtrl.deleteFood);

//authentication
router.post("/register", authCtrl.register);

router.post("/activeEmail", authCtrl.activateEmail);

router.post("/login", authCtrl.login);
// router.get('/user/activate')
router.post("/forgotpassword", authCtrl.forgotPassword);

router.post("/resetpassword", verify, authCtrl.resetPassword);

router.get("/logout", authCtrl.logout);

router.post("/refreshToken", authCtrl.getAccessToken);

//Admin and user Details routes

router.get("/singleuser", verify, userCtrl.getSingleUser);

router.get("/allusers", verify, adminCheck, userCtrl.getAllUsers);

router.patch("/updateuser", verify, userCtrl.updateUser);

router.patch("/updaterole/:id", verify, adminCheck, userCtrl.updateUsersRole);

router.delete("/deleteuser/:id", verify, adminCheck, userCtrl.deleteUser);

module.exports = router;
