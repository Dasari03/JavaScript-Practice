//rest
const multiply = (...numInput) => (
    numInput.reduce((prev,curr)=>prev*curr)
)

const sampleMultiplied = multiply(999, 77646754, 11235322);

console.log(sampleMultiplied);


//spread
const sampleObj = {
    name: 'kev',
    occupation: 'chef'
}

const sampleObj1 = {
    age: 34,
    ...sampleObj
}

console.log(sampleObj1);