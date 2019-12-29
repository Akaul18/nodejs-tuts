const https = require('https');
const fs = require('fs');

const options = {
    hostname : "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
};

var req = https.request(options,(res) => {
    
    var responseBody = "";

    console.log('Response from server started');
    console.log(`Server status: ${res.statusCode}`);
    console.log('Response Headers: %j', res.headers);

    res.setEncoding('UTF-8');

    res.once('data', (chunk)=>{
        console.log(chunk);
    });

    res.on('data',(chunk)=>{
        console.log(`Chunk::  ${chunk.length}`);
        responseBody += chunk;
    });

    res.on('end', ()=>{
        fs.writeFile('george.html',responseBody, (err)=>{
            if(err)
            {
                throw err;
            }
            console.log('file downloaded');
        });
    });
});
req.on('error',(err)=>{
    console.log(`Oops..!!Error while requesting the file..!! ${err.message}`);
});
req.end();