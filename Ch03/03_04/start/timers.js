let waitTime = 3000;
let currentTime = 0;
let waitInterval = 500;

console.log("Wait for it");

const interval = setInterval(() => {
  currentTime += waitInterval;
  console.log(`Waiting ${currentTime / 1000} seconds`);
}, waitInterval);

setTimeout(() => {
  clearInterval(interval);
  // process.stdout.clearLine();
  console.log("done");
}, waitTime);
