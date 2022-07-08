
fetch('https://swapi.dev/api/species')
.then((res)=> {
    if(!(res.status===200)){
        throw new Error('res.ok is not true... Somthing Went Wrong...')
    }else {
        // console.log(res);
        //  console.log(res.json());
    res.json().then((data)=> {
        console.log(data);
        for( let type of data.results){
            console.log(type.name);
        }
   })
   
//    console.log(data);
    }
    
})
.catch((e)=> {
    console.log('Somthing Went Wrong...', e);
})

// console.log(fetch('https://swapi.dev/api/species'));