'use strict';

let subj1 = 59;
let subj2 = 60;
let subj3 = 63;

let subjects = [59, 60, 63];
// let subjects = new Array(59, 60, 63);

console.log('subject 1: ', subjects[0]);
console.log('subject 2: ', subjects[1]);
console.log('subject 3: ', subjects[2]);

let std1 = 'John';
let std2 = 'Luke';
let std3 = 'Doe';

let students = ['John', 'Luke', 'Doe'];

console.log('students: ', students);

// add another element to end of array - push
students.push('Arslan');
console.log('students: ', students);

// add another element to end of array - pop
students.pop();
console.log('students: ', students);

// add another element to beginning of array - unshift
students.unshift('Husnain');
console.log('students: ', students);

// add another element to beginning of array - shift
students.shift();
console.log('students: ', students);

// forEach
// student 1 - Name
// student 2 - Name

students.forEach(function (std, index) {
  // console.log('Student ', index + 1, std);
  //   console.log('Student ' + (index + 1) + ' - ' + std);
  console.log(`Student  ${index + 1} ${std}`);
});

// FIRA CODE
// ! = =

// ninja version
// function filterOddOnly(num) {
//   return num % 2 !== 0;
// }

// boolean returing function naming convention
// isEven;
// isOdd;
// hasDiscount;
// hasProfit;

// human friendly version
function isOdd(num) {
  let result = false;

  result = num % 2 !== 0;

  console.log('returning value: ', result);
  return result;
}

function isEven(num) {
  let result = false;

  result = num % 2 === 0;

  console.log('returning value: ', result);
  return result;
}

let numbers = [10, 31, 54, 543, 520];

let oddNumbers = [];
let evenNumbers = [2, 4];

oddNumbers = numbers.filter(isOdd);
evenNumbers = numbers.filter(isEven);

// oddNumbers = numbers.filter(function (num) {
//   return num % 2 !== 0;
// });

console.log('oddNumbers: ', oddNumbers);
console.log('evenNumbers: ', evenNumbers);
