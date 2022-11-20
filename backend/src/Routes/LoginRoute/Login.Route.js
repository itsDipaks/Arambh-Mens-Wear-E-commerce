const {Router}=require("express")
const { LoginController } = require("../../Controller/LoginController/Login.Controller")

const LoginRouter=Router()


LoginRouter.get("/",LoginController.getdata)



module.exports={LoginRouter}