const express = require('express');

const app = express(); //new instance of express application

app.use((req,res,next)=>{  //custom middleware to get a callback of all the requests

    console.log(`${req.method} request for '${req.url}'`);
    console.log("\n");
    next();

});

app.use(express.static("./public")); //this will invoke the static file server(we are invoking a middleware for static fileserver using static())

app.listen(3000);

console.log("express app running on port 3000");

module.exports = app;