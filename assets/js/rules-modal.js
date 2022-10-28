let rulesBtn = document.querySelector('#rules-btn');
let rulesModal = document.querySelector('.rules-modal');
let closeRulesBtn = document.querySelector('#close-rules');
const playBtn = document.querySelector('#play-btn');
const playModal = document.querySelector('.play-modal');
const closePlayBtn = document.querySelector('#close-play');

function openRules() {
    rulesModal.style.display = "block";
};

function closeRules() {
    rulesModal.style.display = "none";
};

/* Open the play modal */

function openPlay() {
    playModal.style.display = "block";
};

function closePlay() {
    playModal.style.display = "none";
};

rulesBtn.addEventListener("click", openRules);
closeRulesBtn.addEventListener("click", closeRules);
playBtn.addEventListener("click", openPlay);
closePlayBtn.addEventListener("click", closePlay);

/**
 * Close the Modals by a click on the keyboard  
 */
 document.addEventListener('keydown', (event) => {
    
    if (event.key === 'enter') {
        rulesModal.style.display = "none";
    };

  });


    //window.addEventListener('DOMContentLoaded', (event) => {};