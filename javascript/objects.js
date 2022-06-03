'use strict';

// variables
let salary = 10;
// constants
const PI = 3.14;
// arrays
let planets = ['earth', 'mars'];

// object
let car = {
  //properties or attributes
  color: 'white',
  model: 2019,
  transmission: 'automatic',
  fuleCapacity: 10,

  company: 'honda',
  seats: 4,

  //methods
  setFuel: function (fuelNewValue) {
    let newCapacity = 0;
    if (fuelNewValue > 0) {
      newCapacity = fuelNewValue;
    }

    if (fuelNewValue > 100) {
      newCapacity = 100;
    }

    this.fuleCapacity = newCapacity;
  },
  getFuel: function () {
    return this.fuleCapacity;
  },
};

car.fuleCapacity = -10;
car.textContent = 'this is ome content';
car.setFuel(-10);
car.setFuel(1000);
car.setFuel(50);

console.log('fuel capacity: ', car.getFuel());

let cat = {
  color: 'black',
  weight: 2.5,
};

let person = {
  name: 'john',
  age: 25,
  isMale: true,
  salary: 43200,
  favShows: ['Ainak Wala Jin', 'Stopwatch', 'Alpha Bravo Charlie'],
  address: {
    city: 'Toba Tek Singh',
    state: 'Punjab',
    street: '10',
  },

  greet: function () {
    let result = `Hi my name is ${this.name}, I'm ${this.age} years old , and my salary is ${this.salary}`;
    return result;
  },
};

console.log(person.greet());

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.salary);
console.log(person.favShows[0]);
console.log(person.favShows[1]);
console.log(person.favShows[2]);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.street);
