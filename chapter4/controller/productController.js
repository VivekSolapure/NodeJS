const express =require('express')
const server=express();
const fs = require('fs');
const data= JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products
server.use(express.json());


exports.getAllProducts=(req, res)=>{
    res.json(products)
}
exports.getProduct=(req, res) =>{
    const id= +req.params.id;
    const product=products.find(p=>p.id===id)//product madhe products madla id select kraylo je aplyala copy of whole components return karta tya id cha
    res.json(product);
}

exports.createProduct=(req,res)=>{
    console.log(req.body.id);
    products.push(req.body)
    res.status(200).res.json({type:post})

}
exports.replaceProduct=(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(p=> p.id===id)
    products.splice(productIndex,1,{...req.body , id:id})
    res.status(201).json()
}
exports.updateProduct= (req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(p=> p.id===id)
    const product= products[productIndex]
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json()
}
exports.deleteProduct=(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(p=> p.id===id)
    const product= products[productIndex]
    products.splice(productIndex,1)
    res.status(201).json(product)
}
