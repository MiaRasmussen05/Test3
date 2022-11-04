const firstTime = localStorage.getItem('visited');
let welcomeMessage = document.getElementById('welcome');

/**
 * Welcome message shows up when home page is loaded
 */

function startWelcome() {
    welcomeMessage.style.display = "block";
};

function welcomeLeave() {
    welcomeMessage.style.display = "none";
};

function startMessage() {
    welcomeMessage.style.display = "block";
    welcomeMessage.textContent = "Let's get started!"
};

function startLeave() {
    welcomeMessage.style.display = "none";
};

/**
 * If else statment that target the local storage to only show the welcome message the very 
 * first time a visitor is on the site
 */
    if (firstTime == null) {
        localStorage.setItem("visited", 1);
        window.setTimeout(startWelcome, 1000);
        window.setTimeout(welcomeLeave, 3000);
        window.setTimeout(startMessage, 3000);
        window.setTimeout(startLeave, 5000);
    } else {
        welcomeLeave();
        startLeave();
    };
