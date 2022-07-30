class Timer {
    constructor(startButton, pauseButton, timeInput, callBacks){
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.timeInput = timeInput;

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)

        if(callBacks){
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
        }
    }

    start = () => {
        if(this.onStart){
            //this.timeInput.getAttribute('transform') = 'translate(140px, -300px)'
            this.onStart(this.timeRemaining);
        }
        this.tick();
        
        this.interval = setInterval(this.tick, 50)
       
    }

    pause = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        // console.log('tick...');
        // const timeRemaining = parseFloat(this.timeInput.value);
        // this.timeInput.value = timeRemaining - 1;

        if(this.timeRemaining <= 0){
            this.pause();
        if(this.onComplete){
            this.onComplete();
        }
        }else {
            this.timeRemaining = this.timeRemaining - 0.05;
            this.onTick(this.timeRemaining);
        }
        
    }

    get timeRemaining(){
        return parseFloat(this.timeInput.value);
    }

    set timeRemaining(time){
        this.timeInput.value = time.toFixed(2);
    }
   
}