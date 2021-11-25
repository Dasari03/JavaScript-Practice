"use strict";

const account = {
  owner: "Kevin",
  movement: [50, 1650, -1000, 780],
  get latest() {
    return this.movement.pop();
  },
  greet() {
    return `hello this is ${this.owner}`;
  },

  sayBye: function () {
    console.log("goodbye...");
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.movement.slice(-1).pop());
console.log(account.latest);
account.greet();
console.log(account.greet());
account.sayBye();
account.latest = 77;
console.log(account.movement);
