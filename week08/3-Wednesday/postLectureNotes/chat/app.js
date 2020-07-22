const express = require('express');
const app = express();
const socket require('socket.io');

//connect to public
app.use(express.static('public'))

//connect to views
app.use('view engine', 'ejs');
app.use('views', 'views')

let server = app.listen(8000);

// pass server into the socket server
let io = socket(server);

io.on('connect', (socket)=>{

    socket.emit('chatMessage', {msg: "hello from backend"})
})
