
const multiplyBy = (num) => {
    return function(multiplier){
        return num * multiplier;
    }
}

const firstCalc = multiplyBy(17);

console.log(firstCalc);

const firstResult = firstCalc(33);

console.log(firstResult);

const calcInBetween = (x, y) => {
    return (num) => {
        return num >= x && num <=y;
    }
}

const isOkWeatherInLA = calcInBetween(65, 80);
const weatherResult = isOkWeatherInLA(64);
console.log(weatherResult);