import express from "express";
import { Server } from "socket.io";
import cors  from "cors" ;
import http from "http";
import { connect } from "http2";

const app = express ();
const port =8000;

app.set('view engine', 'ejs');

// create server using http
const server =  http. createServer(app)


// const socket server 
const io =  new Server(server,{

    cors:{
        origin:'*',
        methods:["GET","POST"]
    }
})

// use socket events

io.on("connection",(socket)=>{
    console.log("connection is established");

    socket.on('new_message', (message) => {
        // broadcast this message to all the clients.
        socket.broadcast.emit('broadcast_message', message);
     })

    socket.on('disconnect',()=>{
        console.log('disconnection is established');
    })
})



// Define a route to render the HTML file
app.get('/', (req, res) => {
    // Render the HTML file (assuming it's in the 'views' directory)
    res.render('client');
  });

server.listen(8000,()=>{
    console.log("connection is establishe"  );
   
})