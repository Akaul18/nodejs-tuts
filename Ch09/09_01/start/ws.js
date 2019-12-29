const webSocketServer = require('ws').Server;

const wss = new webSocketServer({port:3000}); //instance of web socket server

wss.on('connection',(ws)=>{
    ws.send("Welcome to cyber chat");
});