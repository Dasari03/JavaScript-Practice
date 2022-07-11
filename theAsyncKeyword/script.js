
const myAsynctFunction = async function(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw 'Error: x or y is not a number...'
    }
    return x + y;
}

//example 1
myAsynctFunction(1,2)
.then(data => {
    console.log('An async function is resolved...', data);
})
.catch(err => {
    console.log('An async function is rejected...', err);
})

//example 2
myAsynctFunction('1',2)
.then(data => {
    console.log('An async function is resolved...', data);
})
.catch(err => {
    console.log('An async function is rejected...', err);
})