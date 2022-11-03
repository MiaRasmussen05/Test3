let toggle = document.getElementById('toggleMenu')
let setting = document.getElementById('settings')

// window.onclick = function(event) {

//     if (event.target == toggle) {
 
//         toggle.style.display = "none";
 
//      };

//      if (event.target == setting) {
 
//         setting.style.display = "none";
 
//      };
//  };

/**
 * Open and close the hamburger menu on smaller screens
 */
function openToggleMenu() {
    toggle.style.display = 'block';
};

function closeToggleMenu() {
    toggle.style.display = 'none';
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
