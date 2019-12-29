const spawn = require('child_process').spawn;

let cp = spawn('node', ['alwaysTalking']);

cp.stdout.on('data',(data) => {

    console.log(`STDOUT -> ${data.toString().trim()}`);
});

cp.on('close', ()=>{

    console.log("Child process has ended");
    process.exit();
});

setTimeout(() => {
    cp.stdin.write('STOP');
}, 5000);