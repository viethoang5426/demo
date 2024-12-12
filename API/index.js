const express = require("express");
const connect = require("./db");
const cors = require("cors");
const port = 5000;
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const userRouter = require("./Router/user");
const otpRouter = require("./Router/otp");

app.use("/", userRouter);
app.use("/", otpRouter);

connect();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
