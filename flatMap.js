"use strict";

const data = [[1], 2, 3, [-4, [5, 6]], -7, 8, -9, -10, 11];

const flatData = data.flat();

console.log(flatData);

const flatData2 = data.flat(2);

console.log(flatData2);

//flat
const positiveData = data
  .map((el) => el > 0)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);

console.log(positiveData);

//flatMap
const positiveData2 = data
  .flatMap((el) => el > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(positiveData2);
