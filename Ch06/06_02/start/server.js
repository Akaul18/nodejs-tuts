const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});

    res.end(`
        <html>
            <head>
                <title>Servers</title>
            </head>
            <body>
                <h1>Serving HTML</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            </body>
        </html>
    `);
}).listen(8080);
console.log('Server running on port 8080');