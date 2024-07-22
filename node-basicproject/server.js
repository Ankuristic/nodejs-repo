const express = require('express')

const server = express()
server.use(express.static('public'))

// server.get('/',(req,res,next)=>{
//     res.send('best niche in nodejs developer');
//     console.log('get the result6');
//     next();

// })
function Middleware(req,res,next){
    console.log("this is my frst middleware");
    // res.send("this is my first middleware");
    next();

}
function secondMiddleware(req,res,next){
    console.log("this is my second middleware");
    // res.send("this is my second middleware");
    next();
}

function GlobalMiddleware(req,res,next){
    console.log("this is my global middleware");
    res.send("this is my global middleware")
    next();
}
server.use(GlobalMiddleware);

server.get('/',Middleware,secondMiddleware,  (req,res)=>{
    res.send('Be a Coding Ninja.');
    res.status(201).send('hello')
    // console.log('hello', res);

})

server.listen(7000, () =>{
console.log('app is litening on 7000');
})
