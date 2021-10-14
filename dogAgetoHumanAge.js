"use strict";

const ages = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = (arr) => {
  const dogToHuman = ages.map((age) => {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });

  const filteredDogToHuman = dogToHuman.filter((age) => age >= 18);
  const sumHuman = filteredDogToHuman.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return sumHuman / filteredDogToHuman.length;
};

calcAverageHumanAge(ages);

console.log(calcAverageHumanAge(ages));
