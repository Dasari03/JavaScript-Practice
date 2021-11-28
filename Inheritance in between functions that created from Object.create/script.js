"use strict";

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const kevin = Object.create(PersonProto);
kevin.init("kevin", 1987);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`Hello this is new function from StudentProto...`);
};
const minKim = Object.create(StudentProto);
minKim.init("mgk", 1987, "Computer Science");
minKim.calcAge();
minKim.introduce();
