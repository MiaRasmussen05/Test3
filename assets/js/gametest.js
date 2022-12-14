// const gameOverSound = new Audio('assets/sound/gameover.mp3');
let isPlaying = true;
let playPause = document.getElementById('pauseBtn');

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
        gameOverSound.pause();
        updateNewHighScore();
    };

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 150;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime

    draw();
    update();
};

function update() {
    getScore.innerHTML = score
    getHighscore.innerHTML = highScore
    updateSnake();
    updateFood();
    checkDeath();
};

function draw() {
    board.innerHTML = ""
    drawFood(board);
    drawSnake(board);
};

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
};

    function pauseGame() {
    if (!cancelAnimationFrame) {
        // board.style.display = 'none'
        isPlaying = false;
        cancelAnimationFrame(main);
        board.innerText = "PAUSED";
        playPause.innerHTML = '<i class="fas fa-play"></i>';
        console.log("start pause")
    } else {
        isPlaying = true;
        // cancelAnimationFrame(main);
        playPause.innerHTML = '<i class="fas fa-pause"></i>';
        console.log("end pause")
    }
};