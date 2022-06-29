const tottenhamResult = [
    {
        homeTeam : 'Tottenham Hotspur',
        awayTeam : 'Manchester City',
        isSpursWinner : true 
    },
    {
        homeTeam: 'Chelsea',
        awayTeam: 'Tottenham Hotspur',
        isSpursWinner : false
    }, {
        homeTeam: 'Arsenal',
        awayTeam: 'Tottenham Hotspur',
        isSpursWinner : true
    }, 
    {
        homeTeam : 'Tottenham Hotspur',
        awayTeam : 'Liverpool',
        isSpursWinner : false 
    },
    {
        homeTeam : 'Tottenham Hotspur',
        awayTeam : 'Manchester Utd',
        isSpursWinner : false 
     }
]

const sampleUl = document.createElement('ul');
    let sampleLi = document.createElement('li');



    const runSimulation = (data) => {

    
    
    
    for(let game of data){
        getTextInserted(game);
        didSpursWin(game);
        sampleUl.append(sampleLi);
        sampleLi = document.createElement('li')
    }

   return document.body.append(sampleUl)
}





const getTextInserted = (data)=> {
     const {homeTeam, awayTeam, isSpursWinner:spursWon} = data;
        
        if(homeTeam != 'Tottenham Hotspur'){
            sampleLi.innerHTML = `${homeTeam} vs <b class="spursAway">${awayTeam}</b>`
        }else {
            sampleLi.innerHTML = `<b class="spursHome">${homeTeam}</b> vs ${awayTeam}`
        }
        
}

const didSpursWin = (data)=> {
    const {isSpursWinner} = data;
if(!isSpursWinner){
            sampleLi.classList.add('spursLost');
        }
}



const simulation1 = tottenhamResult;
const simulation2 = tottenhamResult;

runSimulation(simulation1);
runSimulation(simulation2);