const express = require("express");
const connect = require("./db");
const cors = require("cors");
const bodyParser = require('body-parser');
const session = require('express-session')
const cookieParser = require("cookie-parser");
require("dotenv").config();

const port = 5000;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(session());
app.use(cors({ 
  origin: "http://localhost:3000",
  credentials: true,
   }));

app.use(bodyParser.urlencoded({ extended: false }));

const userRouter = require("./Router/user");
const otpRouter = require("./Router/otp");

app.use("/", userRouter);
app.use("/", otpRouter);

connect();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
