'use strict';

function calculatePercentage(obt) {
  const TOTAL_MARKS = 1100;
  let result = 0;

  result = (obt / TOTAL_MARKS) * 100;

  result = result.toFixed(2);

  return result;
}

let result1 = calculatePercentage(703);
let result2 = calculatePercentage(520);
let result3 = calculatePercentage(1050);

console.log('Result 1', result1);
console.log('Result 2', result2);
console.log('Result 3', result3);

function greeting1(name) {
  alert(`Welcome ${name}`);
}

function greeting2(name) {
  let result = '';

  result = `Welcome ${name}`;

  return result;
}

let greet = greeting2('John');

console.log('greeting: ', greet);

// function nameOfFunction(arg1, arg2, arg3, ...argn) {
//   rest of the code to run in this function
// }

function adder(num1, num2) {
  return num1 + num2;
}

// arrow functions
const adder = (num1, num2) => {
  return num1 + num2;
};
// another way
const adder = (num1, num2) => num1 + num2;

// currency formatter
// 1 => 1.00, 10.503201,  10 => .50
// function formatter(input) {
//   return input.toFixed(2);
// }
const formatter = (input) => input.toFixed(2);

// another another way
// we can remove parenthesis from arguments if and only iff there is only ONE argument
const formatter = (input) => input.toFixed(2);

const getPI = () => 3.14;
