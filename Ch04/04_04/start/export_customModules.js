const Person = require('./lib/Person');

let ben = new Person("Ben Franklin");
let george = new Person("George Washington");

george.on('speak', function(said) {
	console.log(`${this.name} -> ${said}`);
});
ben.on('speak', function(said){
	console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "blah blah blah.");
