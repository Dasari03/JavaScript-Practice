"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

Car.prototype.breake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

const CAR1 = new Car("BMW", 120);
CAR1.accelerate();
const CAR2 = new Car("Mercedes", 95);
CAR2.breake();
