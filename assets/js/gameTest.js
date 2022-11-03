import { SNAKE_SPEED, update as updateS, draw as drawS, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;

const gameOverMessage = document.getElementsByClassName('game-over');
let gameOver = false;
let restartBtn = document.querySelector('.restart');

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
    const lastRender = (currentTime - lastRenderTime) / 150;
    if (lastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime
    
    

    draw();
    update();
};

window.requestAnimationFrame(main);

function draw() {
    gameBoard.innerHTML = ''
    drawFood(gameBoard)
    drawS();
};

function update() {
    updateS();
    updateFood()
    checkDeath()
};

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
};

function restart(){
    window.location = './test.html';
};
