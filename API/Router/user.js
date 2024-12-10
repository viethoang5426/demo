const router = require("express").Router();

const controlerUser = require("../user");

router.post("/signup", controlerUser.signup);

module.exports = router;
