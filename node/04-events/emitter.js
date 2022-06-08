const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myFirstEmitter = new MyEmitter();

myFirstEmitter.on('myevent', (value) => {
  console.log(`myevent was created with value ${value}`);
});
myFirstEmitter.on('newevent', (value) => {
  console.log(`new event was created with value ${value}`);
});

setTimeout(() => {
  myFirstEmitter.emit('myevent', 10);
}, 4000);

myFirstEmitter.emit('newevent', 20);
