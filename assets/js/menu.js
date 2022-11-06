let toggle = document.getElementById("toggleMenu")
let setting = document.getElementById("settings")
let copyDisclaimer = document.querySelector(".fa-copyright")
let copyright = document.querySelector(".copyright")
let disclaimer = document.querySelector(".disclaimer")

window.onclick = function(event) {
    if (event.target == toggle) {
        toggle.style.display = "none";
     };
 };

/**
 * Open and close the hamburger menu on smaller screens
 */
function openToggleMenu() {
    toggle.style.display = "block";
};

function closeToggleMenu() {
    toggle.style.display = "none";
};

/**
 * Open and close the settings pop up window
 */
function openSettings() {
    setting.style.display = "block";
};

function closeSettings() {
    setting.style.display = "none";
};

// function keepOpen() {
//     if(window.matchMedia("(min-width: 749px)").matches) {
//         // copyright.style.display = "block";
//         // disclaimer.style.display = "block";
//         // copyDisclaimer.style.display = "none";
//         };
// };

function openRights() {
    copyright.style.display = "block";
    disclaimer.style.display = "block";
    copyDisclaimer.style.display = "none";
};

function closeRights() {
    copyright.style.display = "none";
    disclaimer.style.display = "none";
    copyDisclaimer.style.display = "block";
};

setInterval(closeRights, 5000);

// let close = setInterval(closeRights, 5000);

// function keepOpen() {
//     if(window.matchMedia("(min-width: 749px)").matches) {
//         clearInterval(close);
//     };
// };
