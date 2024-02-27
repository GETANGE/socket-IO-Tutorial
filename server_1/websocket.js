// http is a core module
const http = require('http');

// third-party module
const WebSocket = require('ws');

const port = 3001;

const server = http.createServer((req, res) => {
    res.end('Am connected');
});

const wss = new WebSocket.WebSocketServer({ server });

wss.on('headers', function(headers, req){
    console.log(headers);
})

wss.on('connection', function(websocket, req){
    // console.log(req);
    websocket.send('Welcome to the WebSocket server !!!😊')
    websocket.on('message', function(message){
        console.log(message.toString()); // toString is used to convert binary data to string. 
    })
})
server.listen(port, function () {
    console.log('server listening on port: ' + port);
});
