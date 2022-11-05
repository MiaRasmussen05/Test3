const gameOverMessage = document.querySelector('.game-over');
let gameOver = false;
let restartBtn = document.querySelector('.restart');

function outsideGrid(position) {
    return (
      position.x < 1 || position.x > 30 ||
      position.y < 1 || position.y > 30
    )
  }
  
  function restart(){
      window.location = './test.html';
  };