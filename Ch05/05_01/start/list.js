const fs = require("fs");

// const files = fs.readdirSync('./lib'); //read contents of a dir synchronously
fs.readdir("./lib", (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files);
});
console.log("Reading files..");
