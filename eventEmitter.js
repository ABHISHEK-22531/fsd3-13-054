import {EventEmitter} from 'node:events';
const task = new EventEmitter();
 const sayHi = (name) => {
    console.log (`welcome to ${name}`);
 };
    const starts= () => {
        console,log("System satarted")
    
 };
 task.on("greet",starts);
 task.on("greet",sayHi);
 
 task.emit("greet", "anil pandey");