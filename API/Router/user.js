const router = require("express").Router();

const controlerUser = require("../Controller/user");

router.post("/login", controlerUser.login);
router.post("/signup", controlerUser.signup);

module.exports = router;
