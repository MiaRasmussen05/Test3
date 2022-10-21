let lastRenderTime = 0;
const GRID_SIZE = 30;
const board = document.getElementsByClassName('board')[0];

const SNAKE_BODY = [{ x: 15, y: 15 }];
let newSegments = 0;

const SNAKE_SPEED = 1;

var img = new Image(); 
var div = document.getElementsByClassName('food'); 

let food = getRandomFoodPosition();

const EXPANSION_RATE = 1;

let score = 0;
const getScore = document.getElementsByClassName('score')[0];


let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

const controlButtons = document.getElementsByClassName('touch-controls')[0];
const touchControls = document.getElementsByClassName('btnControls');
 

const gameOverMessage = document.getElementsByClassName('game-over')[0];
let gameOver = false;
const restartBtn = document.querySelector('.restart');




window.addEventListener('DOMContentLoaded', (event) => {
    window.requestAnimationFrame(main)
    gameOverMessage.style.display = "none"
    for (let i = 0; i < touchControls.length; i++) {
        touchControls[i].addEventListener('click', touchControlsClicked);
    }
});

/**
 * This function request an animation frame to update the game every second
 */
function main(currentTime) {

    if (gameOver) {
        board.style.display = "none"
        gameOverMessage.style.display = "block"
    }

    //getting the frame to animate the game
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 150
    //updates based on the snake speed
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    
    update()
    draw()
}

/**
 * Moves the snake to the correct position but doesnt draw it
 * also says when the game is lost
 */
function update() {
    getScore.innerHTML = score
    updateSnake()
    updateFood()
    checkDeath()
}
/**
 * Clear the previous segments and draw the new ones
 */
function draw() {
    board.innerHTML = ''
    drawSnake(board)
    drawFood(board)
}

/**
 * Check a failure.
 * Failure happens if the snake get out of the grid or touch itself
 */
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

/**
 * updates the position of the snake and the directions to move
 */
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


/**
 * Draws the snake after update the position
 */
function drawSnake(board) {
    SNAKE_BODY.forEach(segment => {
        
        let snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        board.appendChild(snakeElement)
    })
}

/**
 * Get a number of how much to expand the snake
 * increase the segment
 */
function expandSnake(amount) {
    newSegments += amount
}

/**
 * Get the position of the food and compare with the snake segments
 * 
 */
function onSnake(position, {
    ignoreHead = false
    } = {}) {
    return SNAKE_BODY.some((segment, index) => {
        //ignores if the snake head is on the snake head
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}


/**
 * Get the position of the head of the snake 
 */
function getSnakeHead() {
    return SNAKE_BODY[0]
}

/**
 * Verify if the head of the snake touches the body 
 */
function snakeIntersection() {
    return onSnake(SNAKE_BODY[0], {
        ignoreHead: true
    })
}

/**
 * Verify if the position of the food and the snake match
 */
function equalPositions(num1, num2) {
    return num1.x === num2.x && num1.y === num2.y
}

/**
 * Take new segments and add to the bottom of the snake
 * every update
 */
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        //takes the very last segment and duplicate on the end of the snake
        SNAKE_BODY.push({
            ...SNAKE_BODY[SNAKE_BODY.length - 1]
        })
    }
    //Avoid add more elements then its told to
    newSegments = 0
}

/**
 * Update the snake and score based on the expansion rate and get a new position for the food 
 */
function updateFood() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        score++
        food = getRandomFoodPosition()
    }
}

/**
 * Draw the food on the screen based with the update loop
 * 
 */
function drawFood(board) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    img.onload = function() { 
        div.appendChild(img); 
      }; 
       
      img.src = './assets/images/Apple1.png' 
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}

/**
 * Gives a random position inside the grid
 */

// Giv random position for the food inside the grid
function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * 30) + 1,
        y: Math.floor(Math.random() * 30) + 1
    }
}

/**
 * Get a random position to get the food
 * that is not on the body of the snake
 */

// New random position for every new food on the board
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

/**
 * Return true or false if the element is outside the grid
 */

//Return true of false if the snake get beyond the grid border
function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}

/**
 * Function to Restart the game
 */
 function restart(){
    restartBtn.addEventListener('click' || event.keyCode == 13, () => {
        window.location = './test.html';
      });
};


/**
 * Listen to the user input with the arrow keys on the keyboard
 *  and get the user input and change direction of the snake
 */
 function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}


// EventListener for the keydown of the keyboard to move the snake

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) 
            break
            inputDirection = {
                x: 0,
                y: -1
            }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) 
            break
            inputDirection = {
                x: 0,
                y: 1
            }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) 
            break
            inputDirection = {
                x: -1,
                y: 0
            }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) 
            break
            inputDirection = {
                x: 1,
                y: 0
            }
            break
    }
})

// Attributes for the controls in the game page
function touchControlsClicked() {
    if (this.getAttribute("id") === "leftBtn") {
        if(lastInputDirection.x !== 0){
            return
        } else {
            inputDirection = {
                x: -1,
                y: 0
            }
            return
        }
    } else if (this.getAttribute("id") === "rightBtn") {
       if(lastInputDirection.x !== 0){
        return
       } else {
        inputDirection = {
            x: 1,
            y: 0
        }
        return
       }
    } else if (this.getAttribute("id") === "upBtn") {
       if(lastInputDirection.y !== 0){
        return
       } else {
        inputDirection = {
            x: 0,
            y: -1
        }
        return
       }
    } else if (this.getAttribute("id") === "downBtn") {
        if(lastInputDirection.y !== 0){
            return
        } else {
            inputDirection = {
                x: 0,
                y: 1
            }
            return
        }
    }
}