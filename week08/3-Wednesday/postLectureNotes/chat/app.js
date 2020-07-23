const express = require('express');
const app = express();
const socket = require('socket.io');

//connect to public
app.use(express.static('public'))

//connect to views
app.set('view engine', 'ejs');
app.set('views', 'views');

//routes

app.use(require('./routes/chat'))


let server = app.listen(8000);

// pass server into the socket server
let io = socket(server);

io.on('connect', (socket)=>{

    socket.emit('chatMessage', {msg: "hello from backend"})

    socket.on('msgFromClient', (msgClient)=>{
        console.log(msgClient);

        //broadcasting back out to all connected clients
        io.emit('msgFromServer', msgClient)
    })
})
