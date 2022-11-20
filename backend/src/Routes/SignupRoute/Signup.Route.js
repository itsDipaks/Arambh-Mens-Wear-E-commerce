const {Router}=require("express")
const { SignupController } = require("../../Controller/SignupController/Signup.Controller")


const SignupRouter=Router()

SignupRouter.get("/",SignupController.getdata)

module.exports={SignupRouter}