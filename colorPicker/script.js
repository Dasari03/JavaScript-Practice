// const width = Math.floor(Math.random()*window.innerWidth);
// const height = Math.floor(Math.random()*window.innerHeight);

const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', function(){
    const width = Math.floor(Math.random()*window.innerWidth);
    const height = Math.floor(Math.random()*window.innerHeight);
    btn.style.top = `${height}px`;
    btn.style.left = `${width}px`;
})

btn.addEventListener('click', function(){
    btn.innerText = 'You Got Me........  ):';
    btn.style.backgroundColor = 'red';
    document.body.style.backgroundColor='blue';
    btn.style.top = `${this.height}px`;
    btn.style.left = `${this.width}px`;
})