let playing = false;
let playPause = document.getElementById('pauseBtn');

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