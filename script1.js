"use strict";

//ES6 class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(setSpeed) {
    this.speed = setSpeed * 1.6;
  }
}

const ford = new CarCl("Ford", 100);
// ford.accelerate();

// console.log(ford.speedUS);
// ford.speedUS = 130;
// console.log(ford.speedUS);

ford.speedUS = 130;
