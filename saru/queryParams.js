const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app
  .get("/movie/:movie", (req, res) => {
    console.log(req.params);
    console.log(req.query);
  })
  .listen(port, () => console.log("running on " + port));
