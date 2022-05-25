//object is not iterable which means that we cannot use for of

const movieRates = {
    "The Lord Of The Rings" : 9.5,
    "Harry Porter" : 9.5,
    Godzilla : 2.7,
    "Mission Impossible" : 9.1,
    "007" : 9.3
}

console.log(movieRates);

console.log(movieRates["Godzilla"]);

const keyMovieRates = Object.keys(movieRates);
console.log(keyMovieRates);
for(key of keyMovieRates){
    console.log(key);
}

const valueMovieRates = Object.values(movieRates);
console.log(valueMovieRates);
let sum = 0;
let avg;
for(value of valueMovieRates){
sum += value;
}

//calulating movie rates based on the movieRates Object
avg = sum / valueMovieRates.length;

console.log(avg);