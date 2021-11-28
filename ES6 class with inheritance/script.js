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

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(
      `I am ${2021 - this.birthYear} year old but I feel more like I am ${
        2021 - this.birthYear + 10
      } after I started ${this.course} major in the school.`
    );
  }
  calcAge() {
    console.log(2100 - this.birthYear);
  }
}

const minKim = new StudentCl("mingyun", 1987, "computer science");
minKim.calcAge();
minKim.introduce();
