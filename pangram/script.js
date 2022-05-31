// A pangram is a sentence that contains every letter of the alphabet like:
//"The quick brown fox jumps over the lazy dog"

//Write a function called isPangram, which checks to
//see if a given sentence contains every letter of the alphabet.
//Make sure you ignore string casing!

//isPangram('The five boxing wizards jump quickly') //true
//isPangram('The five boxing wizards jump quick') //false


//           1. array
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function isPangram(sentence){
 for(let i = 0; i < sentence.length; i++){
     const lowerSentence = sentence.toLowerCase();
     for(let j = 0; j < alphabet.length; j++){
         if(lowerSentence[i] === alphabet[j]){
             alphabet.splice(j, 1);
         }
     }
 }
 if(alphabet.length === 0){
     return true;
 }
 return false;
}


//  2. string

function isPangram2(sentence){
    const lowercased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(lowercased.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}


for(let char of 'hello my name is min Kim'){
    console.log(char);
}