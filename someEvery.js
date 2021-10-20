"use strict";

const data = [1, 2, 3, -4, 5, 6, -7, 8, -9, -10, 11];

//seperate function
const callBack = (el) => el > 0;

//some
console.log(data.some(callBack));

//every
console.log(data.every(callBack));

//filter
console.log(data.filter(callBack));
