const music = new Audio("assets/sound/music.mp3");
const healtyFoodEffect = new Audio('assets/sound/healtyfood.mp3');
const gameOverSound = new Audio('assets/sound/gameover.mp3');
let musicBtnPlay = document.getElementsByClassName("music");
let musicOff = document.getElementById("musicBtnOff");
let musicOn = document.getElementById("musicBtnOn");
let muted = false;
let soundeffects = ['healtyFoodEffect', 'gameOverSound'];
let effects = new Audio(soundeffects);
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

for (var i = 0; i < soundBtnPlay.length; i++) {
  soundBtnPlay[i].addEventListener("click", function () {
    if (effects.play()) {
      disableMute();
    } else {
      enableMute();
    };
  });
  console.log("hello");
};

console.log(soundBtnPlay);

function enableMute() {
  healtyFoodEffect.muted = true;
  gameOverSound.muted = true;
  soundOff.style.display = 'block';
  soundOn.style.display = 'none';
}

function disableMute() {
  healtyFoodEffect.muted = false;
  gameOverSound.muted = false;
  soundOff.style.display = 'none';
  soundOn.style.display = 'block';
}