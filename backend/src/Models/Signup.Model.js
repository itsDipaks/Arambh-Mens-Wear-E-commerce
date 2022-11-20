const mongoose=require("mongoose")
const SignupSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    mobileNo:{type:Number,required:true},


})
const SignupModel=mongoose.model("UserSignupdata",SignupSchema)

module.exports={SignupModel}