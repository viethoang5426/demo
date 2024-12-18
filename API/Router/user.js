const router = require("express").Router();

const controlerUser = require("../Controller/user");
const tokenVerify = require("../verifyToken");

router.post("/login", controlerUser.login);
router.post("/signup", controlerUser.signup);
router.get("/logout", controlerUser.logout);
router.post("/changepassword",tokenVerify, controlerUser.changepassword);
router.get("/getAllUsers", controlerUser.getAllUsers);

module.exports = router;
