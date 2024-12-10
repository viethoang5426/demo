const mongoose = require('mongoose')

const user = new mongoose.Schema({
    user : {
        type : String,
        required : true ,
    },
    password : {
        type : String,
        required : true ,
    },
    email : {
        type : String,
        required : true ,
        unique : true ,
    }
},
{
    timestamps : true ,
},
)

module.exports = mongoose.model("user",user)