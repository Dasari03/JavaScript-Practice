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


for(let game of tottenhamResult){

    const {homeTeam, awayTeam, isSpursWinner:spursWon} = game;
    
    if(homeTeam != 'Tottenham Hotspur'){
        sampleLi.innerHTML = `${homeTeam} vs <b class="spursAway">${awayTeam}</b>`
    }else {
        sampleLi.innerHTML = `<b class="spursHome">${homeTeam}</b> vs ${awayTeam}`
    }

    if(!spursWon){
        sampleLi.classList.add('spursLost');
    }
    
    sampleUl.append(sampleLi);
    sampleLi = document.createElement('li')
}

document.body.append(sampleUl)