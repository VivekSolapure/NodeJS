const fs =require ('fs');
const products= JSON.parse(fs.readFileSync('data.json','utf-8'))

const express=require('express');
const server =express();
const morgan= require('morgan')// 3rd party middleware
server.use(express.json())

//Middleware
server.use(morgan('default'))
/*
server.use((req,res,next)=>{ //..............................Middelware Logger
    console.log(req.method,req.ip, req.hostname, req.get('User-agent'));
    next()
})


//static hosting
server.use(express.static('public'))//used for hosting any file; google uses this for hosting any photos; static gives direct download of files included in that folder
*/
//custom middleware for authentication using query(url madla query)
const auth=(req,res,next)=>{
    // console.log(req.query);
    //for using body of the packet write; "req.body.msg==="abc"
    if(req.query.password==='123'){
        next()
    }else{
        res.sendStatus(401);
    }
}



//API - Endpoint - Route
server.get('/',(req,res)=>{
 res.json({type:'GET'})
})
server.post('/',auth,(req,res)=>{
 res.json({type:'POST'})

})
server.put('/',auth,(req,res)=>{
 res.json({type:'PUT'})

})
server.delete('/',auth,(req,res)=>{
 res.json({type:'DELETE'})
d
})
server.patch('/',auth,(req,res)=>{
 res.json({type:'PATCH'})

})



server.get('/demo',(req,res)=>{
    // res.send('hello')//...just as end in node
    // res.sendFile('F:/MERN/Nodejs/chapter2/index.html'); //.....Loading file
    // res.json(products)
    // res.sendStatus(404);
    // res.status(201).send('<h1>Hello</h1>');//....Status with data(look in header of inspect)
})


server.listen(8080,()=>{
    console.log('server started');
});