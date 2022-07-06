
const btn = document.querySelector('.btn');

//console.log(btn);

const boxSize = btn.getBoundingClientRect();
        //console.log(boxSize);
const maxRight = window.innerWidth;
//console.log(maxRight);
let amountMoved;

const moveMyself = (toRight)=> {
    
        return new Promise((resolve, reject)=> {
        setTimeout(()=>{
        if(boxSize.width + toRight < maxRight){
            amountMovedPx = `${toRight}px`;
            console.log(amountMovedPx);
            amountMovedNum = parseInt(amountMovedPx.slice(0, -2));
            console.log(amountMovedNum);
            console.log(typeof(amountMovedNum));
            
            // btn.style.transform = `translateX(${boxSize.width}+${toRight}px)`
            btn.style.left = `${amountMovedNum}px`
            
            resolve({status: '200... sucsess...'})
        }else {
            reject({status : '404... failed...'})
        }

    },2000)

        })
   

}

moveMyself(225)
.then((res)=> {
    console.log('first success');
    return moveMyself(100)
})
.then(()=> {
    console.log('second success');
})
.catch((err)=> {
    console.log(err.status);
})