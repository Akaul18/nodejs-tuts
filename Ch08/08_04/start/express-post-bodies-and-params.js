var express = require("express");
var cors = require("cors");
const bodyParser = require('body-parser'); //is a middleware that will help us parse the data that is posted to this api
var app = express();

var skierTerms = [
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //true fwe have large amount of nested post data to be parsed

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.post('/dictionary-api', (req,res)=>{
    skierTerms.push(req.body);
    res.json(skierTerms);
});

app.delete('/dictionary-api/:term',(req,res)=>{
    // req.params.term will have the that value which we will use to take out the value
    skierTerms = skierTerms.filter((definition)=>{ //this callback function willbe invoked for every term found in the array
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;