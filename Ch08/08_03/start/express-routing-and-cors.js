const express = require("express");
const cors = require('cors'); //cross origin resourse sharing(cors)..it is a function which will return a middleware that can be used with express app

const app = express();

const skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.use(cors()); //means any domain can make a request for our dictionary-api

app.get("/dictionary-api",(req,res)=>{  //this will set a get route for me

	res.json(skierTerms); //express app will set response headers to json and also stringify it on our behalf
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;