//we can add method in the Object
const multyply1 = (a,b) => {
    return a * b;
}
const calculationObj = {
    sum : (a,b)=> {
        return a + b;
    },

    substraction : (a,b) => {
        return a - b;
    },

    multyply1,

    division(x, y) {
        return x / y;
    }
}

const sampleSum = calculationObj.sum(199, 1);
console.log(sampleSum);

const sampleSub = calculationObj['substraction'](100, 1);
console.log(sampleSub);

const sampleMultiply = calculationObj.multyply1(100, 333);
console.log(sampleMultiply);