const userRouter = require('./Router/user');
const express = require("express");
const connect = require("./db");
connect();
const app = express();
const port = 5000;

app.use(express.json());
app.use('/',userRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
