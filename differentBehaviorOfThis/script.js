const tottenhamHotspur = {
    
    city : "London",
    topScorer : "Son",
    ucl : true,
    captain : "Hugo Lloris",

    sampleDescription(){
        console.log(`this is from sampleDescription...`);
        console.log(this);
    const {city, topScorer, ucl, captain} = this;
    console.log(`${city} ${topScorer} ${ucl}`);
    },

    chant(){
        console.log(`Come on yo Spurs!!!`);
    },
    description(){
        console.log(`Tottenham Hotspur is from city of ${this.city} and the top scorer of the last season was ${this.topScorer}`);
    },
    //when we use arrowfunction, this keyword will indicate 'window' not the object it belongs
    captianOfSpurs : ()=> {
        console.log(`Captain of the spurs is ${this.captain}`);
    }
}

// tottenhamHotspur.description();
// tottenhamHotspur.captianOfSpurs();

tottenhamHotspur.sampleDescription()