"use strict";

//fill
const x = new Array(7);
console.log(x);

// x.fill(1);

// console.log(x);

x.fill(1, 4, 5);

console.log(x);

//Array.from() method
const y = Array.from({ length: 5 }, () => 5);

console.log(y);

const z = Array.from({ length: 6 }, (_, i) => i);

console.log(z);

const g = Array.from({ length: 8 }, (curr, i) => i + 1);

console.log(g);

//Array of 100 Random Dice results
const randomDice100 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 6 + 1)
);

console.log(randomDice100);
