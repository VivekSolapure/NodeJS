const productcontroller=require('../../controller/userController.js')
const express =require('express')
const userController=express.Router();

userController
.post('/',productcontroller.createProduct)
.get('/',productcontroller.getAllProducts)
.get('/:id',productcontroller.getProduct)
.put('/:id', productcontroller.replaceProduct)
.patch('/:id',productcontroller.updateProduct)
.delete('/:id', productcontroller.deleteProduct)

exports.routes=userController;