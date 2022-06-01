// Write a getCard() function which returns a random playing card object, like:
//   {
//     value: 'K'
//     suit: 'clubs'
//   }
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs, spades, hearts, diammonds
//Return both in an object

const randomValue = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const randomSuit = ['clubs', 'spades', 'hearts', 'diammonds'];



function getCard(){
    let randomNumValue = Math.floor(Math.random() * 14);
let randomNumSuit = Math.floor(Math.random() * 4);
    return {
        value: randomValue[randomNumValue],
        suit: randomSuit[randomNumSuit]
    }
    randomNumValue = Math.floor(Math.random() * 14);
    randomNumSuit = Math.floor(Math.random() * 4);
}

