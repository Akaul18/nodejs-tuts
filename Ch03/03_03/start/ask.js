const questions = [
	"what is ur name",
	"what is your hobby",
	"how old are you?"
];

let answers = [];

const ask = (i) =>
{
	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	process.stdout.write('  >  ');
}

process.stdin.on('data',(data)=>{ //asynchronous call
	// process.stdout.write(`\n ${data.toString().trim()}`);
	answers.push(data.toString().trim());
	if(answers.length < questions.length){
		ask(answers.length);
	}else{
		process.exit();
	}
});

process.on('exit',()=>{
	for(let i in questions)
	{
		process.stdout.write('\n'+questions[i]+" > "+answers[i]+'\n');
	}
});

ask(0);

//process.stdout and process.stdin are ways where we can commuicate with a running process