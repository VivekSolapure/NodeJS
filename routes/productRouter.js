const productcontroller=require('../controller/productController')
const express =require('express')
const productRouter=express.Router();

productRouter
.post('/',productcontroller.createProduct)
.get('/',productcontroller.getAllProducts)
.get('/:id',productcontroller.getProduct)
.put('/:id', productcontroller.replaceProduct)
.patch('/:id',productcontroller.updateProduct)
.delete('/:id', productcontroller.deleteProduct)

exports.routes=productRouter