'use strict';

let heading = document.createElement('h1');
heading.textContent = 'This is heading 1';
heading.classList.add('my-5', 'lead');

// element where we want to add tag
const source = document.querySelector('.root');
source.appendChild(heading);

// str=  '1231231231'
// append 10
// str=  '123123123110'

console.log(heading);
