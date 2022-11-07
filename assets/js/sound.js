const music = new Audio("assets/sound/music.mp3");
let musicBtnPlay = document.getElementsByClassName("music");
let musicOff = document.getElementById("musicBtnOff");
let musicOn = document.getElementById("musicBtnOn");
// let healtyFoodEffect = new Audio('assets/sound/healtyFood.mp3');
let soundBtnPlay = document.querySelector(".sound");
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

soundBtnPlay.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    music.volume = 0.1;
    music.loop = true;
    soundOn.style.display = 'block';
    soundOff.style.display = 'none';
  } else {
    music.pause();
    musicOff.style.display = 'block';
    musicOn.style.display = 'none';
  };
});