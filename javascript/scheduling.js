'use strict';

// execute only once after delay

// defination or declaration
function greet() {
  alert('Hi, there will you join our newsletter');
}

// execution, or running or calling the function
// greet();

// setTimeout
// runs some code inside a function after given delay
// setTimeout(fnToRun, delay)
// fnToRun : any function you want to run
// delay should be in ms(milli seconds) 1s(second) = 1000ms(milli seconds)

// let notification = setTimeout(greet, 5000);
// clearTimeout(notification);

//setInterval
let repeatNotification = setInterval(greet, 5000);

console.log('interval id: ', repeatNotification);

setTimeout(function () {
  console.log('clearing interval id: ', repeatNotification);
  clearInterval(repeatNotification);
}, 10000);
