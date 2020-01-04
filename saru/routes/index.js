const express = require("express");
const Router = express.Router();

Router.use("/music", require("./api.v0.js"));

module.exports = Router;
