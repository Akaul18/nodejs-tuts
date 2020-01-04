const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json({ message: "message received" });
  //   res.send("welcome to /api endpoint");
});

module.exports = Router;
