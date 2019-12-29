// console.log(process.argv); // process module is available globally in node and it is an array

const grab = (flag)=>{
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

let greeting = grab('--greeting');
let user = grab('--user');

if(!user || !greeting)
{
	console.log("you blew it..!!");
}else{
	console.log(`Welcome ${user}, ${greeting}`);
}