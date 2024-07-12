const express =require('express')
const server=express();
const model=require('../model/productModel')
const products=0
const Product=model.Product
server.use(express.json());


exports.getAllProducts=async(req, res)=>{
    const product= await Product.find()
    res.json(product)
}
exports.getProduct=async(req, res) =>{
    const id= req.params.id;
    const product=await Product.findById(id)//product madhe products madla id select kraylo je aplyala copy of whole components return karta tya id cha
    res.json(product);
}

exports.createProduct= async(req,res)=>{
    const product = new Product(req.body)

        product.save().then(()=>{
            res.status(201).json(req.body)
            console.log(req.body);
        }).catch((err)=>{
            res.status(400).json(err)
            console.log(err);
        })
    // res.status(201).json(req.body)

}
exports.replaceProduct=async(req,res)=>{
    const id= req.params.id;
    try{
        const product=await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(product)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
exports.updateProduct= async(req,res)=>{
    const id= req.params.id;
    try{
        const product=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(product)

    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
exports.deleteProduct=async(req,res)=>{
    const id= req.params.id;
    try{
        const product=await Product.findOneAndDelete({_id:id})
        res.status(201).json(product)

    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
