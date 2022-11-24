const {ProductModel} = require("../Models/Product.Model");

// ................Get All Products Data...............
const getAllproducts = async(req, res) => {
try{
    const allproducts=await ProductModel.find()
    res.status(400).send({msg:"All products",Products:allproducts})
}catch(err){
res.status(200).send({msg:"something Wents Wrong please try again",err:err})
}
};

// .............Add Products Data................

const addProducts = async (req, res) => {
  const {product_name,price,description} = req.body;
  const data = req.body;
  console.log(req.body)
  console.log(data)

  try {
    const setproduct = ProductModel({
        product_name:product_name,
        price:price,
        description:description
    });
    await setproduct.save();
    res
      .status(400)
      .send({msg: `Product ${data.product_name}  added sucessfully`});
  } catch (err) {
    res
      .status(200)
      .send({msg: "Something wents wrong please check enterd data",err:err});
  }
};

const ProductController = {getAllproducts, addProducts};

module.exports = {ProductController};
