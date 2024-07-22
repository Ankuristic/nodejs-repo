const express = require("express")
const  ProductController =require( '../inventry-mgmt/src/controllers/product.controllers');
const path = require('path')

// import ProductController from '../inventry-mgmt/src/controllers/product.controllers'

const server = express();


// server.get("/",(req,res)=>{
//     return res.send("welcome to inventory app")
// })


// setup the view engine setting
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),'src','views'))
 ProductController = new ProductController();
server.get('/', ProductController.getProducts)

server.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,'./products.html'))
})


server.listen(3100,()=>{
    console.log("server is listening on 3100");
})