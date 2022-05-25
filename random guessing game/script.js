const randomNum = Math.floor(Math.random()*10);
console.log(randomNum);
let guessNum = Math.floor(Math.random()*10);

while(guessNum !== randomNum){
    console.log("Wrong guess! Try again!");
    console.log(`randomNum is ${randomNum}, and your guessNum was ${guessNum}...`);
    guessNum = Math.floor(Math.random()*10);
}

console.log(`Congratulations! Your guess was correct!!! radomNum was ${randomNum} and your guess was ${guessNum}
`);