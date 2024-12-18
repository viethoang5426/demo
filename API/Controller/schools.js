const userModel = require("../Model/schools");


// Add new school


exports.addNewSchool = async (req, res) => {
  try {
    const data = req.body;
    let errors = {};
    const emailValid = await userModel.findOne({ schoolEmail: data.schoolEmail });
    if (emailValid) {
      errors.email = "Email trường học đã tồn tại";
      return res.status(400).send({ errors });
    }
    const phoneValid = await userModel.findOne({ schoolPhone: data.schoolPhone });
    if (phoneValid) {
      errors.phone = "Số điện thoại trường học đã tồn tại";
      return res.status(400).send({ errors });
    }

    const newUser = new userModel(data);
    await newUser.save();
    res.status(200).send("Thêm mới trường học thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get Schools List

exports.getAllSchools = async (req, res) => {
  try {
    const schoolData = await userModel.find({}, "-password");
    if (!schoolData || schoolData.length === 0) {
      return res
        .status(404)
        .json({ message: "Không trường học nào được tìm thấy" });
    }
    res.status(200).json({
      message: "Danh sách trường học: ",
      schoolData,
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi máy chủ ", error: error.message });
  }
};