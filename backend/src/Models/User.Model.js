const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    mobileNo:{type:Number,required:true},
    country:{type:String,}
})
const UserModel=mongoose.model("UserData",UserSchema)
module.exports={UserModel}

      
