const router = require("express").Router();

const controlerUser = require("../Controller/user");

router.post("/login", controlerUser.login);
router.post("/signup", controlerUser.signup);
router.post("/changepassword", controlerUser.changepassword);

module.exports = router;
