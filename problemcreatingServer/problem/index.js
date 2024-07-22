// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

const http =require('http')

const server = http.createServer((re,res)=>{
    res.end('welcome to ninja srver')
})

server.listen(8080,()=>{
    console.log('Response received at port 8080.');
})

module.exports = server;
