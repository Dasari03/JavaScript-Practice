"use strict";

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2021 - this.birthYear;
  }

  greet() {
    console.log(`Hello there, I am ${this.firstName}...`);
  }

  //Getter property in ES6 Class
  get age() {
    return 2021 - this.birthYear;
  }

  //Getter and Setter can be used for Data Validation
  //setting a property that already exist
  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
      console.log(name);
    } else {
      alert(`${name} is not a full name!!!!`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const kevin = new Person("kev kim", 1987);

// console.log(kevin.calcAge());
// kevin.greet();
// console.log(kevin.age);

console.log(kevin._fullName);
