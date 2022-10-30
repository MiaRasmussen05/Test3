let welcomeMessage = document.getElementById('welcome');

window.addEventListener('DOMContentLoaded', (event) => {

    welcomeMessage.textContent += " to Snake Snack";
    welcomeMessage.style.width = "95%";
    welcomeMessage.style.display = "block";
    welcomeMessage.style.position = "absolute";
    welcomeMessage.style.backgroundColor = "#2B2B2C";
    welcomeMessage.style.borderRadius = "10px";
    welcomeMessage.style.borderBottomRightRadius = "100px";
    welcomeMessage.style.borderTopLeftRadius = "100px";
    welcomeMessage.style.boxShadow = "0 0 10px #000";
    welcomeMessage.style.textAlign = "center";
    welcomeMessage.style.color = "#DFDEE0";
    welcomeMessage.style.textShadow = "0px 0px 5px #000";
    welcomeMessage.style.padding = "0 0.5%";
    welcomeMessage.style.marginLeft = "2%";
    welcomeMessage.style.transition = "all 2s";

});

    function welcomeLeave() {

        welcomeMessage.style.display = "none"
    
    };
    
    setTimeout("welcomeLeave()", 3000);

    function startMessage() {

        welcomeMessage.style.display = "block"
        welcomeMessage.innerHTML = "Let's get started!";

    };

    setTimeout("startMessage()", 3000);

    function startLeave() {

        welcomeMessage.style.display = "none"

    };

    setTimeout("startLeave()", 5000);
