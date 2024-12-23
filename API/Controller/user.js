const userModel = require("../Model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../Utils/mail");

//Login

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCheck = await userModel.findOne({ email: email });
    if (!userCheck) {
      return res.status(400).send("Email chưa đăng kí");
    }

    const isPasswordValid = await bcrypt.compare(password, userCheck.password);
    if (!isPasswordValid) {
      return res.status(400).send("Mật khẩu không chính xác");
    }

    const token = jwt.sign(
      { id: userCheck._id, email: userCheck.email, user: userCheck.user },
      process.env.ACCESS_TOKEN_SERECT,
      { expiresIn: "1h" }
    );

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });

    res.status(200).json({
      message: "Đăng nhập thành công",
      token,
      user: {
        id: userCheck._id,
        email: userCheck.email,
        user: userCheck.user,
      },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

//Sign up

// exports.signup = async (req, res) => {
//   try {
//     const {
//       user,
//       email,
//       password,
//       schoolName,
//       phoneNumber,
//       dateBirth,
//       sex,
//       role,
//     } = req.body;
//     const emailValid = await userModel.findOne({ email: email });
//     if (emailValid) {
//       return res.status(400).send("Email đã tồn tại");
//     }

//     const phoneValid = await userModel.findOne({ phoneNumber: phoneNumber });
//     if (phoneValid) {
//       return res.status(400).send("Số điện thoại đã tồn tại");
//     }

//     const hashPassword = await bcrypt.hash(password, 10);
//     const newUser = new userModel({
//       user: user,
//       email: email,
//       password: hashPassword,
//       schoolName: schoolName,
//       phoneNumber: phoneNumber,
//       dateBirth: dateBirth,
//       sex: sex,
//       role: role,
//     });
//     await newUser.save();
//     res.status(200).send("Đăng kí thành công");
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

//Sign up

exports.signup = async (req, res) => {
  try {
    const data = req.body;
    let errors = {};
    const emailValid = await userModel.findOne({ email: data.email });
    if (emailValid) {
      errors.email = "Email đã tồn tại";
      return res.status(400).send({ errors });
    }
    const phoneValid = await userModel.findOne({ phone: data.phone });
    if (phoneValid) {
      errors.phone = "Số điện thoại đã tồn tại";
      return res.status(400).send({ errors });
    }

    const hashPassword = await bcrypt.hash(data.password, 10);
    data.password = hashPassword;
    const newUser = new userModel(data);
    await newUser.save();
    res.status(200).send("Đăng kí thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

//Change password
exports.changepassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      const hashNewPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashNewPassword;
      await user.save();
      res.status(200).send("Đổi mật khẩu thành công");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get All User Infomation

exports.getAllUsers = async (req, res) => {
  try {
    const usersData = await userModel.find({});
    if (!usersData || usersData.length === 0) {
      return res
        .status(404)
        .json({ message: "Không có người dùng nào được tìm thấy" });
    }
    res.status(200).json({
      message: "Danh sách người dùng : ",
      usersData,
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi máy chủ ", error: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("authToken").status(200).json("Đã đăng xuất");
};
