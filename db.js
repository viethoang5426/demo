
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://caohoang5969:hoang5426@cluster0.90far.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test"
    );
    console.log("Connected DB success");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
