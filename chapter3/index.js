////************************************REST API************************* */

const express =require('express')
const server=express();
const fs = require('fs')
const data= JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products



//Body parser
server.use(express.json());

//Read api
server.get('/products',(req, res)=>{
    res.json(products)
})
//Read with params
server.get('/products/:id',(req, res) =>{
    const id= +req.params.id;
    const product=products.find(p=>p.id===id)//product madhe products madla id select kraylo je aplyala copy of whole components return karta tya id cha
    res.json(product);
})


//Create api

server.post('/products', (req, res)=>{
    console.log(req.body.id);
    products.push(req.body)
    res.json({type:'post'})
})


//CRUD operations:-

//Create api

server.post('/products', (req, res)=>{
    console.log(req.body.id);
    products.push(req.body)
    res.status(200).res.json({type:post})
})

//Update: put, it rewrite the whole content

server.put('/products/:id', (req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(p=> p.id===id)
    products.splice(productIndex,1,{...req.body , id:id})
    res.status(201).json()
})


//Update: PATCH 

server.patch('/products/:id', (req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(p=> p.id===id)
    const product= products[productIndex]
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json()
})


//Delete DELETE

server.delete('/products/:id', (req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex(p=> p.id===id)
    const product= products[productIndex]
    products.splice(productIndex,1)
    res.status(201).json(product)
})

server.listen(8080,()=>{
    console.log('Server Started');
})