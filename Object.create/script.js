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

console.log(kevin);
kevin.birthYear = 1987;
kevin.calcAge();
console.log(kevin.__proto__);
console.log(kevin.__proto__ === PersonProto);

const peter = Object.create(PersonProto);
peter.init("peter", 1986);
peter.calcAge();
