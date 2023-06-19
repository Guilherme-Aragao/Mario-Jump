const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.png';
    mario.style.width = '95px'
    mario.style.marginLeft = '20px'


    clearInterval(loop)
    
    }
}, 10);
document.addEventListener('keydown', jump);

const clouds2 = document.querySelector('.clouds2');

setTimeout(() => {
  clouds2.style.animation = 'clouds2-animation 10s infinite linear';
  clouds2.style.right = '100%';
}, 4500);



