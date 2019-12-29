const http = require('http');
const data = require('./data/inventory');

http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.writeHead(200,{'Content-Type': 'text/json'});
        res.end(JSON.stringify(data));
    }else if(req.url === '/instock'){
        listinStock(res);
    }else if(req.url === '/onorder'){
        listonBackorder(res);
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Whoops... Data not found");
    }
}).listen(8080);

console.log("listening..");

const listinStock = (res)=>{
    let inStock = data.filter((item)=>{ //because data is an array
        return item.avail === 'In stock';
    }); 
    res.end(JSON.stringify(inStock));
}

const listonBackorder = (res)=>{
    let onOrder = data.filter((item)=>{ //because data is an array
        return item.avail === 'On back order';
    }); 
    res.end(JSON.stringify(onOrder));
}