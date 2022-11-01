let lastRenderTime = 0;
const SNAKE_SPEED = 1;

/**
 * Animation frame request that updates the page 
 */
function frameRender(currentTime) {
    window.requestAnimationFrame(frameRender);
    const lastRender = (currentTime - lastRenderTime) / 150;
    if (lastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime
    
    console.log('lastRender');
};

window.requestAnimationFrame(frameRender);