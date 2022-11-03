const music = new Audio('assets/sound/music.mp3');
let musicBtnPlay = document.getElementById('musicBtn');
const healtyFoodEffect = new Audio('assets/sound/healtyFood.mp3');
const gameOverSound = new Audio('assets/sound/gameOver.mp3');
let soundBtnPlay = document.getElementById('soundBtn');

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

export {music, musicBtnPlay, healtyFoodEffect, gameOverSound};