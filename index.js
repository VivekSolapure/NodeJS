// const lib=require('./lib.js')
// const fs=require('fs')
// const express=require('express')

// // console.log('hello');

// const server=express();
// server.listen(8080)


// const t1=performance.now()
// const txt=fs.readFileSync('demo.txt','utf-8')
// // fs.readFile('demo.txt','utf-8',(err,txt)=>{
// //     console.log(txt);
// // })
// console.log(txt);
// console.log((lib.sum(1,2)));
// const t2=performance.now()
// console.log(t2-t1);

const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

// Get port number from command line arguments or default to 8080
const port = process.argv[2] || 8080;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url.startsWith('/product')) {
        const id = req.url.split('/')[2];
        const product = products.find(p => p.id == +id);

        if (product) {
            console.log(product);
            res.setHeader('Content-Type', 'text/html');
            let modifiedIndex = index.replace('**title**', product.title)
                .replace('**url**', product.thumbnail)
                .replace('**price**', product.price)
                .replace('**rating**', product.rating);
            res.end(modifiedIndex);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Product not found....Plz provide 1-30 :)');
        }
    } else {
        console.log('server started');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Server is running!<br>In url type /product/{num from 1
            -30}</h1><p>eg:'http://localhost:${port}/products/15'</p>`);
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
