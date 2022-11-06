let isPlaying = false;
let playPause = document.getElementById('pauseBtn');

playPause.addEventListener("click", function() {
    if(!isPlaying){
        isPlaying = false;
        board.innerText = "PAUSED";
      playPause.innerHTML = '<i class="fas fa-play"></i>';
      
    } else {
        cancelAnimationFrame(main);
      playPause.innerHTML = '<i class="fas fa-pause"></i>';
    }
  });