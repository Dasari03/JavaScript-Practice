"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

// const kevin = new Person("kevin", 1987);
// kevin.calcAge();
// console.log(kevin);

const Student = function (firstName, birthYear, major) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.major = major;
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} whose major is ${this.major}.`);
};
const kevin = new Student("min", 1987, "computer science");

kevin.introduce();
kevin.calcAge();
