const {UserModel} = require("../../Models/User.Model");
const bcrypt=require("bcrypt")
const getdata = (req, res) => {
  res.send("signup logic");
};

const Adduser = async(req, res) => {
  const {email, password,mobileNo,name} = req.body;
  const userExist =await UserModel.findOne({email});

console.log(userExist)

  if (userExist) {
    res.status(502).send({msg: "User Already Exist Please Login !!"});
  } 
  else {
    bcrypt.hash(password, 5, async function (err, hasedPassword) {
      if(err){
        res.send({msg:"Something Wents Wrong Please check password"})
      }else{
        try{
            const userdata = UserModel({
               name:name,
                email: email,
                password: hasedPassword,
                mobileNo: mobileNo,
              });
              await userdata.save();
              res.status(201).send({msg:"User Signup Sucessfully"})
        }catch(err){
            res.send({msg:"Something Wents Wrong Please check Entered Values !!"})
        }
      }
    });
  }
};

const SignupController = {getdata,Adduser};

module.exports = {SignupController};
