const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const chalk = require("chalk");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.disable("x-powered-by");
console.log(chalk.red("heyy"));
// app.set("json spaces", 2); //remove this line when app is in prod
app.use("/api", routes);

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  res.status(404).send("Unknown request");
  next();
});

// app.post("/", (req, res) => {
//   console.log("this is a post req");
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
