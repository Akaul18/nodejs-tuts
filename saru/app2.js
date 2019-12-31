const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hii welcome");
});

app.post("/", (req, res) => {
  console.log("this is a post req");
});

app.listen(3000, () => {
  console.log("Server is listening");
});
