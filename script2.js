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

const EV = function (make, speed, charge) {
  //link the parental parameter to the child
  Car.call(this, make, speed);
  this.charge = charge;
};
//link the parent prototype to the child
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
// const CAR1 = new Car("BMW", 120);
// CAR1.accelerate();
// const CAR2 = new Car("Mercedes", 95);
// CAR2.breake();

const CAR1 = new EV("tesla", 120, 23);

CAR1.accelerate();
