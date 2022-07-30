
const startButton = document.querySelector('.start');
const pasueButton = document.querySelector('.pause');
const timeInput = document.querySelector('.timeInput');
const circle = document.querySelector('circle')
const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer1 = new Timer(startButton, pasueButton, timeInput, {
    onStart(totalDuration){
    //    let newPosition =  timeInput.getAttribute('transform');
    //    newPosition =  
    timeInput.style.transform = 'translate(135px, -300px)'
        console.log('Timer started...');
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining/duration - perimeter
        );
        

    },
    onComplete(){
        console.log('on complete ...');
    }
})