const { UserModel } = require("../../Models/User.Model")

const Authrization=async(req,res,next)=>{
const userid=req.body.userid
const userfind=await UserModel.findOne({userid:_id})
}

module.exports={Authrization}