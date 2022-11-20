const {UserModel} = require("../../Models/User.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//-------------------------------------------------------
const secret_key = process.env.SCREATE_KEY;





const getdata = (req, res) => {
  res.send("data");
};



const checkuser = async (req, res) => {
  const {email, password} = req.body;
  const user = await UserModel.findOne({email});

  if (user) {
    const enteredpassword = password;
    const storedhashpassword = user.password;
    const userid = user._id;

    bcrypt.compare(enteredpassword, storedhashpassword, function (err, result) {
      if (result) {
        var token = jwt.sign({userid: userid}, secret_key);
        res.status(200).send({mag: "User Login Sucessfull", token: token});
      }
    });
  } else {
    res.status(404).send({msg: "User Not Found Please Signup"});
  }
};








const LoginController = {getdata, checkuser};

module.exports = {LoginController};
