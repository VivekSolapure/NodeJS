const mongoose = require('mongoose');
require('dotenv').config()
const productrouter=require('./routes/productRouter.js')
const usertrouter=require('./routes/userRouter.js')
const express =require('express');
const path=require('path')
const server=express();
const {Schema}=mongoose;
const cors=require('cors');
server.use(express.json())

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("database Connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



//bodyparser
server.use(cors());

server.use('/products',productrouter.routes);
server.use('/users',usertrouter.routes);
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})
// console.log(process.env.PASSWORD);
server.listen(process.env.PORT,()=>{
    console.log('Server Started');
})
