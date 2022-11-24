const {Router}=require("express")
const { ProductController } = require("../../Controller/Products.Controller")

const ProductRouter=Router()

ProductRouter.get('/allproducts',ProductController.getAllproducts)
ProductRouter.post("/addproduct",ProductController.addProducts)

module.exports={ProductRouter}