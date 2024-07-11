require('dotenv').config()
const productrouter=require('./routes/productRouter.js')
const usertrouter=require('./routes/userRouter.js')
const express =require('express');
const server=express();
server.use('/products',productrouter.routes);
server.use('/users',usertrouter.routes);

server.use(express.static(process.env.PUBLIC_DIR))
console.log(process.env.PASSWORD);
server.listen(process.env.PORT,()=>{
    console.log('Server Started');
})
