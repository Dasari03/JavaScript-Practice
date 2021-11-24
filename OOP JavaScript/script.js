"use strict";

const Person = function (firstName, birthYear, property) {
  console.log(this);
  this.anyDamnName = firstName;
  this.anyDamnYear = birthYear;
  //   this.calcAge = function () {
  //     console.log(2021 - this.anyDamnYear);
  //   };
  this.anyDamnProperty = property;
};

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const kevin = new Person("mingyun", 1987);
// console.log(kevin);
// const peter = new Person("minjae", 1986);

Person.prototype.calcAge = function () {
  console.log(2021 - this.anyDamnYear);
};

Person.prototype.nationality = "South Korean";

console.log(Person.prototype);

kevin.calcAge();
console.log(kevin);

console.log(kevin.__proto__);

console.log(Person.prototype.isPrototypeOf(kevin));

console.log(kevin.hasOwnProperty("nationality"));

console.log(Object.prototype);
