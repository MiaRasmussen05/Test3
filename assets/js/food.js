let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

let score = 0;
const getScore = document.getElementsByClassName('score')[0];

function updateFood() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        score++
        food = getRandomFoodPosition()
    };
};

function drawFood(board) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    if (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
