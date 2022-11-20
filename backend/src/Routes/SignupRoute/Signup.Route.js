const {Router}=require("express")
const { SignupController } = require("../../Controller/SignupController/Signup.Controller")


const SignupRouter=Router()

SignupRouter.get("/getuser",SignupController.getdata)
SignupRouter.post("/addUser",SignupController.Adduser)
module.exports={SignupRouter}