// const { request } = require('express');
const user = require('../Model/user');

// exports.login = async(req, res ) => {
//       try {
        
//       } catch (error) {
        
//       }
// }


exports.signup = async(req, res ) => {
    try {
      const request = req.body
      const userValid = await user.findOne({email: request.email})
      if ( userValid ) {
         return res.status(400).send("Email da ton tai");
      }
      const newUser = new user(request);
      await newUser.save();
      res.status(200).send("Dang ki thanh cong");
    } catch (error) {
        res.status(500).send("Error",error);
    }
}