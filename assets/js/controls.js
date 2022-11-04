const controlButtons = document.getElementsByClassName('touch-controls')[0];
const touchControls = document.getElementsByClassName('btnControls');

function main(currentTime) {
window.addEventListener('DOMContentLoaded', (event) => {
    window.requestAnimationFrame(main)
    for (let i = 0; i < touchControls.length; i++) {
        touchControls[i].addEventListener('click', touchControlsClicked);
    }
});
};

// EventListener for the keydown of the keyboard to move the snake

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) 
            break
            inputDirection = {
                x: 0,
                y: -1
            }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) 
            break
            inputDirection = {
                x: 0,
                y: 1
            }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) 
            break
            inputDirection = {
                x: -1,
                y: 0
            }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) 
            break
            inputDirection = {
                x: 1,
                y: 0
            }
            break
    }
})

// Attributes for the controls in the game page
function touchControlsClicked() {
    if (this.getAttribute("id") === "leftBtn") {
        if(lastInputDirection.x !== 0){
            return
        } else {
            inputDirection = {
                x: -1,
                y: 0
            }
            return
        }
    } else if (this.getAttribute("id") === "rightBtn") {
       if(lastInputDirection.x !== 0){
        return
       } else {
        inputDirection = {
            x: 1,
            y: 0
        }
        return
       }
    } else if (this.getAttribute("id") === "upBtn") {
       if(lastInputDirection.y !== 0){
        return
       } else {
        inputDirection = {
            x: 0,
            y: -1
        }
        return
       }
    } else if (this.getAttribute("id") === "downBtn") {
        if(lastInputDirection.y !== 0){
            return
        } else {
            inputDirection = {
                x: 0,
                y: 1
            }
            return
        }
    }
    
}