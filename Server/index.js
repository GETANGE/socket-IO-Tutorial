const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const socketio = require('socket.io');

const app = express();
const port = 3000;
dotenv.config({ path: 'config.env' });

//rendering static files
app.use(express.static(__dirname + '/public'));

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// creating the server
const expressServer = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// creating the the socket connection
const io = socketio(expressServer);

io.on('connection', (socket)=>{
    console.log(socket.id, "has connected");
    socket.emit('Message from server',{
        data: 'Welcome to the Socket server'
    })
    socket.on('Message from client', (data)=>{
        console.log("Data: ",data);
    })
})