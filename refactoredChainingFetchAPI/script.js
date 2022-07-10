
const firstThen = (response) => {
    return response.json()
}
const secondThen = (data) => {
    for(let result of data.results){
        console.log(result.name);
    }
    return data.next;
}

const chainFetch = (url) => {
    return fetch(url);
}

///////////////////////////////////////////////////

fetch('https://swapi.dev/api/people')
.then(firstThen)
.then(secondThen)
.then(chainFetch)
.then(firstThen)
.then(secondThen)
.then(chainFetch)
.then(firstThen)
.then(secondThen)
.then(chainFetch)
.then(firstThen)
.then(secondThen)
.then(chainFetch)
.then(firstThen)
.then(secondThen)