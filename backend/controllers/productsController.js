import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js'

 const getAllProducts =  asyncHandler(async (req,res) => {
    const products = await Product.find({});
  
    res.status(200).json(products);
 })


 const getAProductById =  asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.status(200).json(product);
    }else{
      res.status(404);
      throw new Error('not found');
    }
});

export {
    getAProductById,
    getAllProducts
}