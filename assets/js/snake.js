const SNAKE_BODY = [{ x: 13, y: 13 }];
let newSegments = 0;

function updateSnake() {

  addSegments()
    const inputDirection = getInputDirection()
    //update every segment except the last one
    for (let i = SNAKE_BODY.length - 2; i >= 0; i--) {
        SNAKE_BODY[i + 1] = {
            ...SNAKE_BODY[i]
        }
    }

    SNAKE_BODY[0].x += inputDirection.x
    SNAKE_BODY[0].y += inputDirection.y
}

function drawSnake(board) {
    SNAKE_BODY.forEach(segment => {
        
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake');
        board.appendChild(snakeElement);
    });
};

function expandSnake(amount) {
    newSegments += amount
    healtyFoodEffect.playbackRate = 1;
    healtyFoodEffect.play();
    // healtyFoodEffect.volume = '0.07';
    healtyFoodEffect.currentTime = 0;
}

function onSnake(position, {
    ignoreHead = false 
    } = {}) {
    return SNAKE_BODY.some((segment, index) => {
        //ignores if the snake head is on the snake head
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    });
};

function getSnakeHead() {
    return SNAKE_BODY[0];
};

function snakeIntersection() {
    return onSnake(SNAKE_BODY[0], {
        ignoreHead: true
    });
};

function equalPositions(num1, num2) {
    return num1.x === num2.x && num1.y === num2.y;  
};

function addSegments() {
    for (let i = 0; i < newSegments; i++) {

        SNAKE_BODY.push({
            ...SNAKE_BODY[SNAKE_BODY.length - 1]
        });
    };

    newSegments = 0
};