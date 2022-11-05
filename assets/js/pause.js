let isPlaying = true;
let playPause = document.getElementById('pauseBtn');

playPause.addEventListener("click", function() {
    if(isPlaying){
        isPlaying = true;
        board.innerText = "PAUSED";
      playPause.innerHTML = '<i class="fas fa-play"></i>';
      requestAnimationFrame(main);
    } else {
        isPlaying = false;
        cancelAnimationFrame(main);
      playPause.innerHTML = '<i class="fas fa-pause"></i>';
    };
  });