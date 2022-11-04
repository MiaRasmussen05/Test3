const firstTime = localStorage.getItem('visited');
let welcomeMessage = document.getElementById('welcome');

/**
 * Welcome message shows up when home page is loaded
 */
    // welcomeMessage.textContent += " to Snake Snack";
    // welcomeMessage.style.width = "95%";
    // welcomeMessage.style.display = "none";
    // welcomeMessage.style.position = "absolute";
    // welcomeMessage.style.backgroundColor = "#2B2B2C";
    // welcomeMessage.style.borderRadius = "10px";
    // welcomeMessage.style.borderBottomRightRadius = "100px";
    // welcomeMessage.style.borderTopLeftRadius = "100px";
    // welcomeMessage.style.boxShadow = "0 0 10px #000";
    // welcomeMessage.style.textAlign = "center";
    // welcomeMessage.style.color = "#DFDEE0";
    // welcomeMessage.style.textShadow = "0px 0px 5px #000";
    // welcomeMessage.style.padding = "0 0.5%";
    // welcomeMessage.style.marginLeft = "2%";
    // welcomeMessage.style.transition = "all 2s ease-in";

function startWelcome() {
    welcomeMessage.style.display = "block";
};

function welcomeLeave() {
    welcomeMessage.style.display = "none";
};

function startMessage() {
    welcomeMessage.style.display = "block";
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
