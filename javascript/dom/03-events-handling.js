'use strict';

const body = document.querySelector('body');

const clickHandler = function (event) {
  console.log(event);
  body.classList.add('anyclass');
  let elem = event.target;
  //   elem.classList.add('active');
  /*
    background-color => backgroundColor
    color => color
    text-align = textAlign
    */
  elem.style.backgroundColor = 'green';
  elem.style.padding = '1em';
  console.log('you clicked on lead paragraph');
};

body.addEventListener('click', clickHandler, true);
// body.addEventListener('click', () => {
//   console.log('click in body tag');
// });

// const section = document.querySelector('section');
// section.addEventListener('click', () => {
//   console.log('click in section tag');
// });

const element = document.querySelector('.lead');

// element.addEventListener('click', clickHandler);
