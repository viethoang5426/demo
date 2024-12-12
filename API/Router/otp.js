const router = require("express").Router();

const controlerOTP = require("../Controller/otp");

router.post("/sendotp", controlerOTP.sendotp);

module.exports = router;
