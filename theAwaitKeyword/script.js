

// console.logs will be executed immediately before axios.get() which will return error and undefined.
    

// async function getFilms(){
//         const films =   axios.get('https://swapi.dev/api/films/');
//         // films.then(status => console.log(status))
//         console.log(films);
//         console.log(films.data);
        
//     }



//using await keyword make a hold until the line is being executed before they move on to the next line.
 async function getFilms(){
    const films =  await axios.get('https://swapi.dev/api/films/');
    // films.then(status => console.log(status))
    console.log(films);
    console.log(films.data);
    console.log(films.status);
    console.log(films.headers);
    
}

getFilms()