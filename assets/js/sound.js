const music = new Audio("assets/sound/music.mp3");
const healtyFoodEffect = new Audio('assets/sound/healtyfood.mp3');
const gameOverSound = new Audio('assets/sound/gameover.mp3');
let musicBtnPlay = document.getElementsByClassName("music");
let musicOff = document.getElementById("musicBtnOff");
let musicOn = document.getElementById("musicBtnOn");
let mute = false;
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

  let soundeffects = ['assets/sound/healtyfood.mp3', 'assets/sounds/gameover.mp3'];
  let effects = new Audio(soundeffects);

  if (effects.paused) {
    effects.play(effects);
    effects.volume = 0.1;
    mute = false;
    soundOn.style.display = 'block';
    soundOff.style.display = 'none';
  } else {
    mute = true;
    effects.pause(effects);
    musicOff.style.display = 'block';
    musicOn.style.display = 'none';
  };
});
console.log("hello");
};
