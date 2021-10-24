"use strict";

///////////////////////////////////////
//TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
//1
dogs.forEach((dog) => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});

//console.log(dogs);

//2

console.log(dogs.find((dog) => dog.owners.includes("Sarah")));

//3

const ownersEatTooMuch = dogs
  .filter((dog) => dog.recommendedFood > dog.curFood)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.recommendedFood < dog.curFood)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4
let tooMuchStr = "";

for (let i = 0; i < ownersEatTooMuch.length; i++) {
  tooMuchStr +=
    i === ownersEatTooMuch.length - 1
      ? `${ownersEatTooMuch[i]}'s dogs eat too much.`
      : `${ownersEatTooMuch[i]} and `;
}
console.log(tooMuchStr);

let tooLittleStr = "";

for (let i = 0; i < ownersEatTooLittle.length; i++) {
  tooLittleStr +=
    i === ownersEatTooLittle.length - 1
      ? `${ownersEatTooLittle[i]}'s dogs eat too Little.`
      : `${ownersEatTooLittle[i]} and `;
}
console.log(tooLittleStr);

//5
dogs.find((dog) => dog.recommendedFood === dog.curFood);
console.log(dogs.some((dog) => dog.recommendedFood === dog.curFood));

//6
dogs.find((dog) => dog.recommendedFood > dog.curFood);
console.log(
  dogs.some(
    (dog) =>
      dog.recommendedFood * 0.9 < dog.curFood &&
      dog.recommendedFood * 1.1 > dog.curFood
  )
);

//7
dogs.filter(
  (dog) =>
    dog.recommendedFood * 0.9 < dog.curFood &&
    dog.recommendedFood * 1.1 > dog.curFood
);

console.log(
  dogs.filter(
    (dog) =>
      dog.recommendedFood * 0.9 < dog.curFood &&
      dog.recommendedFood * 1.1 > dog.curFood
  )
);

//8

let dogsCopy = dogs.slice();
console.log(dogsCopy);
dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
