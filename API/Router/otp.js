const router = require("express").Router();

const controlerOTP = require("../Controller/otp");

router.post("/sendotp", controlerOTP.sendotp);
router.post("/verifyotp", controlerOTP.checkOTP);

module.exports = router;
