class Car {
    constructor(make, year, model ){
        this.make = make;
        this.year = year;
        this.model = model;
        // const {make, year, model} = this;
        // console.log(`The car is ${this.make} ${this.year} ${this.model}`);
    }
    
    describe(){
        const {make, year, model} = this;
        console.log(`The car is ${this.make} ${this.year} ${this.model}`);
    }
    
}

const clk320 = new Car('Mercedes', 2005, 'clk320');