const exec = require("child_process").exec;

// exec('open http://linkedin.com');
// exec('open -a Terminal .');

exec("git version", (err, stdout) => {
  if (err) {
    throw err;
  }
  console.log("Git version executed");
  console.log(stdout);
}); //any data that is returned comes to the second argument of exec;
