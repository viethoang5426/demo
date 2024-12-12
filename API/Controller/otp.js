const userModel = require("../Model/user");
const otpModel = require("../Model/opt");
const sendToUserEmail = require("../Utils/mail");

// Send OTP

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;
    const userCheckEmail = await userModel.findOne({ email: email });
    if (!userCheckEmail) {
      return res.status(400).send("Email chưa đăng kí");
    }

    const otp = generateRandomOTP();
    const endOTPTime = new Date(Date.now());

    const otpMailCheck = await otpModel.findOne({ email: email });

    if (!otpMailCheck) {
      const newOtp = new otpModel({
        email: email,
        expiresat: endOTPTime,
        otp: otp,
      });
      console.log(newOtp, "dddddd");
      await newOtp.save();
    } else {
      (otpMailCheck.otp = otp),
        (otpMailCheck.expiresat = endOTPTime),
        await otpMailCheck.save();
    }

    await sendToUserEmail({
      email: "dat958734@gmail.com",
      subject: "Nhap OTP sau de lay lai mat khau",
      html: `<b1> Mã OTP kích hoạt của bạn là :  ${otp}<b1/>`,
    });
    res.status(200).send("Đã gửi OTP vào Email");
    
  } catch (error) {
    res.status(500).send(error);
  }
};

function generateRandomOTP() {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}