// const http = require("http");

// const server = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/html" });
//   response.end(`${request.method} ${request.url}`);
// });
// server.listen(3000);
// console.log("server is listening");

const http = require("http");
const path = require("path");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/api") {
      const htmlPath = path.join(__dirname, "/public/index.html");
      // console.log(htmlPath);
      // return false;
      fs.readFile(htmlPath, "UTF-8", (err, data) => {
        res.writeHead(200, "content-type: text/html");
        res.end(data);
      });
    } else if (req.url.match(/.css$/)) {
      const cssPath = path.join(__dirname, "public", req.url);

      const fileStream = fs.createReadStream(cssPath, "UTF-8");

      res.writeHead(200, { "Content-Type": "text/css" });

      fileStream.pipe(res);
    } else if (req.url.match(/.jpg$/)) {
      const imgPath = path.join(__dirname, "public", req.url);

      const fileStream = fs.createReadStream(imgPath);

      res.writeHead(200, { "Content-Type": "image/jpeg" });

      fileStream.pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });

      res.end("404-Page not found");
    }
  })
  .listen(3000);

console.log("server is running on port 3000");
