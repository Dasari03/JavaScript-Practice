//destructuring

//array destructuring
const sampleArray = ['kevin', 'kim', 'min','tottenham'];

const [first, last, middle, club] = sampleArray;

console.log(`first : ${first}, last : ${last}, middle : ${middle}, club : ${club}`);

//object destructuring
const sampleObj = {
    firstName : 'kevin',
    lastName : 'Kim',
    city : 'Los Angeles',
    gender : 'male'
}

const {firstName, city, ...theRest} = sampleObj;

console.log(firstName, city);
console.log(theRest);

//nested object destructuring
const nestedObj = [{
    team : 'Tottenhan Hotspur',
    city : 'London',
    stadium : 'White hart Lane'
},
{
    team : 'Manchester Utd',
    city : 'Manchester',
    stadium : 'Old Trafford'
},
{
    team : 'Liverpool FC',
    city : 'Liverpool',
    stadium : 'Anfield'
}];

const [,{team : myTeam, stadium}] = nestedObj;
console.log(`name of second club is ${myTeam} and their stadium is called ${stadium}`);