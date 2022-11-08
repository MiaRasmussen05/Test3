const music = new Audio("assets/sound/music.mp3");
const healtyFoodEffect = new Audio('assets/sound/healtyfood.mp3');
const gameOverSound = new Audio('assets/sound/gameover.mp3');
let musicBtnPlay = document.getElementsByClassName("music");
let musicOff = document.getElementById("musicBtnOff");
let musicOn = document.getElementById("musicBtnOn");
let muted = false;
let soundBtnPlay = document.getElementsByClassName("sound");
let soundOff = document.getElementById("soundBtnOff");
let soundOn = document.getElementById("soundBtnOn");

for (var i = 0; i < musicBtnPlay.length; i++) {
  musicBtnPlay[i].addEventListener("click", function () {
    if (music.paused) {
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
};

window.addEventListener('DOMContentLoaded', (event) => { 
  enableMute()
});

for (var i = 0; i < soundBtnPlay.length; i++) {
  soundBtnPlay[i].addEventListener("click", function () {
    if (muted) {
      enableMute();
      soundOff.style.display = 'block';
      soundOn.style.display = 'none';
    } else {
      disableMute();
      soundOff.style.display = 'none';
      soundOn.style.display = 'block';
    };
  });
};

function enableMute() {
  muted = true;
  healtyFoodEffect.volume = 0;
  gameOverSound.volume = 0;
}

function disableMute() {
  muted = false;
  healtyFoodEffect.volume = 0.1;
  gameOverSound.volume = 0.1;
}