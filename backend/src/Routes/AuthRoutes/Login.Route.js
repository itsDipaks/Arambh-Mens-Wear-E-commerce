const {Router}=require("express")
const { LoginController } = require("../../Controller/Login.Controller")


const LoginRouter=Router()


LoginRouter.get("/getlogin",LoginController.getdata)
LoginRouter.post("/isuser",LoginController.checkuser)


module.exports={LoginRouter}