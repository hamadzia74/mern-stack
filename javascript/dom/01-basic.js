'use strict';

// CRUD
// C reate
// R ead
// U pdate
// D elete

let divElement = '';

// querySelector
// return  first matching div
divElement = document.querySelector('div');

// return all matching divs
// querySelectorAll
divElement = document.querySelectorAll('div');

// return all matching divs
// querySelectorAll
divElement = document.querySelectorAll('div');

// getElementByClassName
divElement = document.getElementsByClassName('lead');
console.log('byClassName: ', divElement);

// getElementById
divElement = document.getElementById('main');
console.log('by id: ', divElement);

// getElementByTagName
divElement = document.getElementsByTagName('div');
console.log('by tag name: ', divElement);

// divElement = document.querySelector('#main .lead');

// html
// divElement.innerHTML = '<h1>Welcome new User</h1>';

// let oldValue = divElement.innerHTML;
// divElement.innerHTML = oldValue + ' <br> New User';
// divElement.innerHTML = 'New User ' + oldValue + '<br>';
// text
// divElement.textContent = '<h1>Welcome new User</h1>';

// classes
let targetElement = document.querySelector('.class-name');
targetElement.classList.add('p-5');
targetElement.classList.remove('class-name');
targetElement.classList.toggle('visible');
targetElement.classList.toggle('my-5');

if (targetElement.classList.contains('visible')) {
  targetElement.innerHTML = targetElement.innerHTML + 'it has visible class';
} else {
  targetElement.innerHTML =
    targetElement.innerHTML + ' it does not have visible class';
}

if (targetElement.classList.contains('my-5')) {
  targetElement.innerHTML = targetElement.innerHTML + ' it has my-5 class';
} else {
  targetElement.innerHTML =
    targetElement.innerHTML + ' it does not have my-5 class';
}
// add element to it

console.log(divElement);
