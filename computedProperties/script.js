// const sampleObj = {};
// const name1 ='min'

// sampleObj.name = 'kevin';
// sampleObj[name1] = 'mingyun';
// sampleObj[name1] = 'firstName';

// console.log(sampleObj);

const role1 = 'midfielder';
const role2 = 'forward';
const role3 = 'defender';
const player1 = 'Klusevski';
const player2 = 'Harry Kane';
const player3 = 'Eric Dier';

let computedObj = {
[role1] : player1,
[role2] : player2,
[role3] : player3
}

let addPlayer = (obj, newKey, newValue) => {
    return {
        ...obj,
        [newKey] : newValue,
    }
}


console.log(computedObj);

const newListOfPlayers = addPlayer(computedObj, 'goalkeeper', 'Hugo Lloris');

console.log(newListOfPlayers);