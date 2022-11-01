import { SNAKE_SPEED, update as updateS, draw as drawS } from './snake.js'

let lastRenderTime = 0;

/**
 * Animation frame request that updates the page 
 */
function frameRender(currentTime) {
    window.requestAnimationFrame(frameRender);
    const lastRender = (currentTime - lastRenderTime) / 150;
    if (lastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime
    
    

    draw();
    update();
};

window.requestAnimationFrame(frameRender);

function draw() {

    drawS();
};

function update() {
    updateS();
};