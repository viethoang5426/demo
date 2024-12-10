const express = require("express");
const connect = require("./db");
const cors=require('cors')
const port = 5000;
const app = express();

app.use(express.json());
app.use(cors())


const userRouter = require("./Router/user");


app.use("/", userRouter);





connect();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
