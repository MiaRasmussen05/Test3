let rulesBtn = document.querySelector('#rules-btn');
let rulesModal = document.querySelector('.rules-modal');
let closeRulesBtn = document.querySelector('#close-rules');

/**
 * Close the rules modal by clicking outside the Modal  
 */
window.onclick = function(event) {

    if (event.target == rulesModal) {
 
        rulesModal.style.display = "none";
 
     };
 };

function openRules() {
    rulesModal.style.display = "block";
};

 function closeRules() {
    rulesModal.style.display = "none";
};

rulesBtn.addEventListener("click", openRules);
closeRulesBtn.addEventListener("click", closeRules);