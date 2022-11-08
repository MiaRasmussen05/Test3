let isPlaying = false;
let playPause = document.getElementById('pauseBtn');

// playPause.addEventListener("click", function() {
  function pauseGame() {
    if(!isPlaying){
        isPlaying = false;
        requestAnimationFrame(main);
        board.innerText = "PAUSED";
      playPause.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        cancelAnimationFrame(main);
        isPlaying = true;
      playPause.innerHTML = '<i class="fas fa-pause"></i>';
    }
  // });
  }; 
  console.log(pauseGame);