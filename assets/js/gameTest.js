const gameOverSound = new Audio('assets/sound/gameOver.mp3');

let lastRenderTime = 0;
let SNAKE_SPEED = 1;
let board = document.getElementsByClassName('board')[0];


window.addEventListener('DOMContentLoaded', (event) => {
    window.requestAnimationFrame(main)
    gameOverMessage.style.display = "none"
    for (let i = 0; i < touchControls.length; i++) {
        touchControls[i].addEventListener('click', touchControlsClicked);
    }
});

/**
 * Animation frame request that updates the page 
 */

 function main(currentTime) {
    if (gameOver) {
        board.style.display = 'none'
        gameOverMessage.style.display = 'block'
        gameOverSound.play();
        gameOverSound.volume = '0.1';
        pause();
    };

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 150;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime

    draw();
    update();
};

window.requestAnimationFrame(main);

function update() {
    getScore.innerHTML = score
    updateSnake();
    updateFood();
    checkDeath();
};

function draw() {
    board.innerHTML = ''
    drawFood(board);
    drawSnake(board);
};
