var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function(ws) {

	ws.on('message', (msg)=>{
		if(msg === 'exit')
		{
			ws.close();
		}else{
			wss.clients.forEach((client)=>{ //clients is an array of all connected web sockets
				client.send(msg);
			}); 
		}
		console.log(msg);
	});

	ws.send("Welcome to cyber chat");

});
console.log('server running');