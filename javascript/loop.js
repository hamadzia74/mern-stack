'use strict';

let marks = [478, 543, 712, 753, 943, 599];

function getPercentage(obtainedMarks) {
  const TOTAL_MARKS = 1000;
  // create a variable to store percentage
  let result = 0;
  result = (obtainedMarks / TOTAL_MARKS) * 100;

  result = result.toFixed(2);

  //   result = parseFloat(result);
  //   result = parseInt(result);
  //   result = +result;
  return result;
}

let percentages = [];

// percentages[0] = getPercentage(marks[0]);
// percentages[1] = getPercentage(marks[1]);
// percentages[2] = getPercentage(marks[2]);
// percentages[3] = getPercentage(marks[3]);

// for (let i = 0; i < marks.length; i++) {
//   percentages[i] = getPercentage(marks[i]);
// }

// console.log('percentages: ', percentages);

// percentages = marks.reduce(function (currentAnswer, currentMark) {
//   let answers = currentAnswer;
//   answers.push(getPercentage(currentMark));
//   return answers;
// }, []);

// percentages = marks.reduce(function (a, c) {
//   return [...a, getPercentage(c)];
// }, []);

let sum = marks.reduce(function (runningTotal, currentMarks) {
  return runningTotal + currentMarks;
}, 0);

console.log('sum: ', sum);

console.log('reduce method: ', percentages);
// for loop syntax
// for (counter; condition; increment / decrement counter) {
//     repeat code
// }

// log 0 to 99;
// for (let count = 0; count < 100; count = count + 1) {
//   console.log(count);
// }

// for (let count = 0; count < 100; count++) {
//   console.log(count);
// }

// // log multiple of 5 from 0 to 99 ;
// for (let count = 0; count < 100; count = count + 5) {
//   console.log(count);
// }

// console.log("1")
// console.log("2")
// console.log("3")
// console.log("100")

// while loop

/*
while (condition) {
    repeat code
}
*/

// let counter = 10;
// while (counter > 0) {
//   console.log('counter:', counter);
//   counter--;
// }

// do while  loop

/*
do {
    repeat this code
} while(this condition is true)

*/
// let counter = 10;
// do {
//   console.log('counter:', counter);
//   counter--;
// } while (counter > 0);

// let j = 0;
// while (j > 0) {
//   console.log('while loop is running');
// }

// j = 0;
// do {
//   console.log('do while loop is running');
// } while (j > 0);

let rollNumber = [1, 3, 4, 5];
let studentNames = ['John', 'Duke', 'Doe', 'Alice'];

// let students = [
//   { rollNo: 1, name: 'John' },
//   { rollNo: 3, name: 'Duke' },
// ];

// [[1, 'john'], [3, 'Duke'], ...]

let students = rollNumber.reduce(function (a, c, i) {
  let rollNumber = c;
  let name = studentNames[i];

  let result = {
    rollNo: rollNumber,
    name: name,
  };

  a.push(result);
  return a;
  //   return [...a, result];
}, []);

console.log('student: ', students);
