const express =require('express')
const server=express();
const fs = require('fs');
const path=require('path')
const data= JSON.parse(fs.readFileSync(path.resolve(__dirname,'data.json','utf-8')));
const users=data.users 
server.use(express.json());


exports.getAllProducts=(req, res)=>{
    res.json(users)
}
exports.getProduct=(req, res) =>{
    const id= +req.params.id;
    const product=users.find(p=>p.id===id)//product madhe products madla id select kraylo je aplyala copy of whole components return karta tya id cha
    res.json(product);
}

exports.createProduct=(req,res)=>{
    console.log(req.body.id);
    users.push(req.body)
    res.status(200).res.json({type:post})

}
exports.replaceProduct=(req,res)=>{
    const id= +req.params.id;
    const productIndex=users.findIndex(p=> p.id===id)
    users.splice(productIndex,1,{...req.body , id:id})
    res.status(201).json()
}
exports.updateProduct= (req,res)=>{
    const id= +req.params.id;
    const productIndex=users.findIndex(p=> p.id===id)
    const product= users[productIndex]
    users.splice(productIndex,1,{...product,...req.body})
    res.status(201).json()
}
exports.deleteProduct=(req,res)=>{
    const id= +req.params.id;
    const productIndex=users.findIndex(p=> p.id===id)
    const product= users[productIndex]
    users.splice(productIndex,1)
    res.status(201).json(product)
}
