

let lastRenderTime = 0;

const music = new Audio('assets/sound/music.mp3');
let musicBtnPlay = document.getElementById('musicBtn');
const healtyFoodEffect = new Audio('assets/sound/healtyFood.mp3');
const gameOverSound = new Audio('assets/sound/gameOver.mp3');
let soundlist = ['assets/sound/gameOver.mp3',
'assets/sound/healtyFood.mp3'];
let soundEffect = new Audio(soundlist[s]);
let soundBtnPlay = document.getElementById('soundBtn');

const board = document.getElementsByClassName('board')[0];

const SNAKE_BODY = [{ x: 15, y: 15 }];
let newSegments = 0;

const SNAKE_SPEED = 1;

var div = document.getElementsByClassName('food'); 

let food = getRandomFoodPosition();

const EXPANSION_RATE = 1;

let score = 0;
const getScore = document.getElementsByClassName('score')[0];

let directionMove = { x: 0, y: 0 };
let lastDirectionMove = { x: 0, y: 0 };

const controlButtons = document.getElementsByClassName('touch-controls')[0];
const touchControls = document.getElementsByClassName('btnControls');

let playing = false;
let playPause = document.getElementById('pauseBtn');
 
const gameOverMessage = document.getElementsByClassName('game-over')[0];
let gameOver = false;
let restartBtn = document.querySelector('.restart');

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
        board.style.display = 'none'
        gameOverMessage.style.display = 'block'
        gameOverSound.play();
        gameOverSound.volume = '0.1';
        pause();
    };

    //getting the frame to animate the game
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 150
    //updates based on the snake speed
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    playing = true;
    
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

playPause.addEventListener("click", function() {
    if(main.paused){
        main.play();
        playing = false;
        board.innerText = "PAUSED";
      playPause.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        main.pause();
      playPause.innerHTML = '<i class="fas fa-pause"></i>';
    };
  });

/**
 * Check a failure.
 * Failure happens if the snake get out of the grid or touch itself
 */
function checkDeath() {
    gameOver = outside(getSnakeHead()) || snakeIntersection()
}

/**
 * updates the position of the snake and the directions to move
 */
function updateSnake() {
    addSegments()
    const directionMove = getDirectionMove()
    //update every segment except the last one
    for (let i = SNAKE_BODY.length - 2; i >= 0; i--) {
        SNAKE_BODY[i + 1] = {
            ...SNAKE_BODY[i]
        }
    }

    SNAKE_BODY[0].x += directionMove.x
    SNAKE_BODY[0].y += directionMove.y
}


/**
 * Draws the snake after update the position
 */healtyFoodEffect
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
    healtyFoodEffect.playbackRate = 1;
    healtyFoodEffect.play();
    healtyFoodEffect.volume = '0.07';
    healtyFoodEffect.currentTime = 0;
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
    });
};


/**
 * Get the position of the head of the snake 
 */
function getSnakeHead() {
    return SNAKE_BODY[0];
};

/**
 * Verify if the head of the snake touches the body 
 */
function snakeIntersection() {
    return onSnake(SNAKE_BODY[0], {
        ignoreHead: true
    });
};

/**
 * Verify if the position of the food and the snake match
 */
function equalPositions(num1, num2) {
    return num1.x === num2.x && num1.y === num2.y;  
};

/**
 * Take new segments and add to the bottom of the snake
 * every update
 */
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        //takes the very last segment and duplicate on the end of the snake
        SNAKE_BODY.push({
            ...SNAKE_BODY[SNAKE_BODY.length]
        });
    };

    newSegments = 0;
};

/**
 * Update the snake and score based on the expansion rate and get a new position for the food 
 */
function updateFood() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        score++
        food = getRandomFoodPosition()
    };
};

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
    if (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

/**
 * Return game over if the snake get beyond the grid border
 */
function outside(position) {
    return (
        position.x < 0 || position.x > 30 ||
        position.y < 0 || position.y > 30
    );
};

/**
 * Function to Restart the game
 */
 function restart(){
    // restartBtn.addEventListener('click' || event.keyCode == 13, () => {
        window.location = './test.html';
    //   });
};


/**
 * Listen to the user input with the arrow keys on the keyboard
 *  and get the user input and change direction of the snake
 */
 function getDirectionMove() {
    lastDirectionMove = directionMove
    return directionMove
}

musicBtnPlay.addEventListener("click", function() {
    if(music.paused){
      music.play();
      music.volume = 0.1;
      music.loop = true;
      musicBtnPlay.innerHTML = '<i class="fas fa-music"></i>';
    } else {
      music.pause();
      musicBtnPlay.innerHTML = '<i class="fas fa-pause"></i>';
    };
  });

  soundBtnPlay.addEventListener("click", function() {
    if(soundEffect.paused){
        soundEffect.play();
        soundBtnPlay.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        soundEffect.pause();
        soundBtnPlay.innerHTML = '<i class="fas fa-volume-mute"></i>';
    };
  });

// EventListener for the keydown of the keyboard to move the snake

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastDirectionMove.y !== 0) 
            break
            directionMove = {
                x: 0,
                y: -1
            }
            break
        case 'ArrowDown':
            if (lastDirectionMove.y !== 0) 
            break
            directionMove = {
                x: 0,
                y: 1
            }
            break
        case 'ArrowLeft':
            if (lastDirectionMove.x !== 0) 
            break
            directionMove = {
                x: -1,
                y: 0
            }
            break
        case 'ArrowRight':
            if (lastDirectionMove.x !== 0) 
            break
            directionMove = {
                x: 1,
                y: 0
            }
            break
    }
})

// Attributes for the controls in the game page
function touchControlsClicked() {
    if (this.getAttribute("id") === "leftBtn") {
        if(lastDirectionMove.x !== 0){
            return
        } else {
            directionMove = {
                x: -1,
                y: 0
            }
            return
        }
    } else if (this.getAttribute("id") === "rightBtn") {
       if(lastDirectionMove.x !== 0){
        return
       } else {
        directionMove = {
            x: 1,
            y: 0
        }
        return
       }
    } else if (this.getAttribute("id") === "upBtn") {
       if(lastDirectionMove.y !== 0){
        return
       } else {
        directionMove = {
            x: 0,
            y: -1
        }
        return
       }
    } else if (this.getAttribute("id") === "downBtn") {
        if(lastDirectionMove.y !== 0){
            return
        } else {
            directionMove = {
                x: 0,
                y: 1
            }
            return
        }
    }
    
}