var EventEmitter = require('events').EventEmitter;
var util = require('util');

class Person {
    constructor(name) {
        this.name = name;
    }
}

util.inherits(Person, EventEmitter); //adds EventEmitter to Persons's prototype

var ben = new Person('Ben Franklin');

ben.on('speak', (said) =>{
   console.log(`${this.name}: ${said}`);
});

ben.emit('speak','you may delay, but time will not.');







// const emitter = new events.EventEmitter();
//
// emitter.on('customEvent', (msg, status)=>{ //call will run when this event is fired
//     console.log(`${status}: ${msg}`);
// });
//
// emitter.emit('customEvent', 'Hello World', 200); //will fire the customEvent