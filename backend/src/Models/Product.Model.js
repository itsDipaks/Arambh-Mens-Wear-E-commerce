const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema({
    product_name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
})
const ProductModel=mongoose.model("Products",ProductSchema)

module.exports={ProductModel}