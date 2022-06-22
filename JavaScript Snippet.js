const myWord = document.createElement('h1');
myWord.innerHTML = 'Hello this is wording from Kev...'
document.body.append(myWord);
myWord.style.color = "teal";




const x = document.documentElement.clientWidth;
const y = document.documentElement.clientHeight;

let randomX = Math.floor(Math.random() * x);
let randomY = Math.floor(Math.random() * y);

myWord.style.transform = `translate(${randomX}, ${randomY})`

setInterval(()=> {
    randomX = Math.floor(Math.random() * x);
    randomY = Math.floor(Math.random() * y);
    myWord.style.transform = `translate(${randomX}px, ${randomY}px)`
}, 1000)

myWord.style.transition = '2s all';

