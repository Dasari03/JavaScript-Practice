

const randomTeamPicker = {
    teams : ['Manchester United', 'Manchester City', 'Liverpool', 'Chelsea', 'Tottenham', 'Westham', 'Wolverhampton', 'Leeds', 'Burnley', 'New Castle'],

    pick(){
        const {teams} = this;
        const team =  Math.floor(Math.random() * teams.length);
        return teams[team];
           
    },

    start(){
         this.menu = setInterval(()=> {
           
           console.log(this.pick());
        }, 2000)
    },

    stop(){
        clearInterval(this.menu);
    }
}

