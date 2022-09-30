const rulesBtn = document.querySelector('#rules-btn');
const rulesModal = document.querySelector('.rules-modal');
const closeRulesBtn = document.querySelector('#close-rules');
const playBtn = document.querySelector('#play-btn');
const playModal = document.querySelector('.play-modal');
const closePlayBtn = document.querySelector('#close-play');

function openRules(){
    rulesModal.style.display = "block";
};

function openPlay(){
    playModal.style.display = "block";
};

/* Open the play modal */

function closeRules(){
    rulesModal.style.display = "none";
};

function closePlay(){
    playModal.style.display = "none";
};

rulesBtn.addEventListener("click", openRules);
closeRulesBtn.addEventListener("click", closeRules);
playBtn.addEventListener("click", openPlay);
closePlayBtn.addEventListener("click", closePlay);

window.onclick = function(event) {
    if (event.target == rules-modal) {
        rulesModal.style.display = "none";
    }
  
      if (event.target == play-modal) {
          playModal.style.display = "none";
      }
  }