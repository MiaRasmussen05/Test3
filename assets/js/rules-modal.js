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

/**
 * Close the Modals by a click on the keyboard  
 */
//  document.addEventListener('keydown', (event) => {
    
//     if (event.key === 'enter') {
//         rulesModal.style.display = "none";
//     };

//   });


    //window.addEventListener('DOMContentLoaded', (event) => {};