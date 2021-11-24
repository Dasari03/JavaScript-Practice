"use strict";

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2021 - this.birthYear);
  }
}

const kevin = new PersonCl("min", 1987);

kevin.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hello there, this is ${this.firstName}`);
};

kevin.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode;
