const express = require('express');
const socketio = require('socket.io');

const app = express();
const port = 3001;

//rendering static files
app.use(express.static(__dirname + '/public'));

// creating the server
const expressServer = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// creating the the socket connection
const io = socketio(expressServer);

io.on('connection', (socket)=>{
    console.log(socket.id, "has connected");
    // socket.emit('messageFromServer',{
    //     data: 'Welcome to the Socket server'
    // })
    socket.on('newMessageToServer', (dataFromClient) => {
        console.log('Data:', dataFromClient);
        io.emit('newMessageFromClients', { text: dataFromClient.text }); // Corrected variable name
    });
})