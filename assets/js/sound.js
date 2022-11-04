const music = new Audio('assets/sound/music.mp3');
let musicBtnPlay = document.querySelector('.music')
let musicOff = document.getElementById('musicBtnOff');
let musicOn = document.getElementById('musicBtnOn');
const healtyFoodEffect = new Audio('assets/sound/healtyFood.mp3');
const gameOverSound = new Audio('assets/sound/gameOver.mp3');
let soundBtnPlay = document.getElementById('soundBtn');

musicBtnPlay.addEventListener("click", function() {
    if(music.paused){
      music.play();
      music.volume = 0.1;
      music.loop = true;
      musicOn.style.display = 'block';
      musicOff.style.display = 'none';
    } else {
      music.pause();
      musicOff.style.display = 'block';
      musicOn.style.display = 'none';
    };
  });
