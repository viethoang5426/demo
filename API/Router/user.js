const router = require("express").Router();

const controlerUser = require("../Controller/user");
const tokenVerify = require("../verifyToken");

router.post("/login", controlerUser.login);
router.post("/signup", controlerUser.signup);
router.get("/logout", controlerUser.logout);
router.post("/changepassword",tokenVerify, controlerUser.changepassword);

module.exports = router;
