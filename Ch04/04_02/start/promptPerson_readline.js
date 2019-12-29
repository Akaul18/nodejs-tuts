const readLine = require('readline');
const rl = readLine.createInterface(process.stdin, process.stdout);
const realPerson = {
    name: '',
    sayings : []
};

rl.question("what is the name of a real person?", (answer)=>{

    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say? `); // to ask the question over and over again(here we set the prompt)

    rl.prompt(); //here we display the prompt
    rl.on('line',(saying)=>{
        realPerson.sayings.push(saying.trim());
        if (saying.toLowerCase().trim() === 'exit'){
            realPerson.sayings.pop();
            rl.close(); //close the prompt
        }else{
            rl.setPrompt(`What else would ${realPerson.name} would say? (type 'exit' to leave)`);
            rl.prompt();
        }
    });
});
rl.on('close',()=>{
   console.log('%s is a real person that says %j',realPerson.name, realPerson.sayings); // %j will replace itself with a json string
    process.exit();
});