const rulesBtn = document.querySelector('#rules-btn');
const rulesModal = document.querySelector('.rules-modal');
const closeRulesBtn = document.querySelector('#close-rules');

function openRules(){
    rulesModal.style.display = "block";
};
function closeRules(){
    rulesModal.style.display = "none";
};

rulesBtn.addEventListener("click", openRules);
closeRulesBtn.addEventListener("click", closeRules);

/* Open the play modal */

const playBtn = document.querySelector('#play-btn');
const playModal = document.querySelector('.play-modal');
const closePlayBtn = document.querySelector('#close-play');

function openPlay(){
    playModal.style.display = "block";
};
function closePlay(){
    playModal.style.display = "none";
};

playBtn.addEventListener("click", openPlay);
closePlayBtn.addEventListener("click", closePlay);