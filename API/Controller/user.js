const userModel = require("../Model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Login

// exports.login = async(req, res ) => {
//       try {
//         const request = req.body;
//         const userTrue = await user.findOne({ user: request.user}) || await user.findOne({ user: request.email});
//         if ( userTrue ) {
//           //user true
//           const passwordTrue = await user.findOne({ user: request.password}) ;

//         }
//         else {
//           //user fall
//           return res.status(400).send("Ten dang nhap khong ton tai");
//         }
//       } catch (error) {

//       }
// }

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCheck = await userModel.findOne({ email: email });
    console.log(userCheck);
    if (!userCheck) {
      return res.status(400).send("Email chưa đăng kí");
    }

    const isPasswordValid = await bcrypt.compare(password, userCheck.password);
    if (!isPasswordValid) {
      return res.status(401).send("Mật khẩu không chính xác");
    }

    const token = jwt.sign(
      { id: userCheck._id, user: userCheck.user },
      "key001njdsncjkdnjkcsd",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Đăng nhập thành công",
      token,
      user: {
        id: userCheck._id,
        user: userCheck.user,
        email: userCheck.email,
      },
    });

  } catch (error) {
    console.error("Đã xảy ra lỗi trong quá trình đăng nhập:", error);
    return res.status(500).send("Đã xảy ra lỗi. Vui lòng thử lại sau");
  }
};

//Sign up

exports.signup = async (req, res) => {
  try {
    const { user, email, password } = req.body;
    const userValid = await userModel.findOne({ email: email });
    if (userValid) {
      return res.status(400).send("Email da ton tai");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      user: user,
      email: email,
      password: hashPassword,
    });
    console.log(newUser);
    await newUser.save();
    res.status(200).send("Dang ki thanh cong");
  } catch (error) {
    res.status(500).send("Error", error);
  }
};
