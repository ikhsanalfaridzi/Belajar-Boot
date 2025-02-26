const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

let isJumping = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    dino.classList.add('jump');

    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 500);
}

setInterval(() => {
    const dinoPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    const cactusPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));

    if (cactusPosition > 0 && cactusPosition < 50 && dinoPosition <= 40) {
        alert('Game Over!');
        cactus.style.animation = 'none';
        cactus.style.display = 'none';
    }
}, 10);