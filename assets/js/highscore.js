let highScore = localStorage.getItem('highScore');
let getHighscore = document.getElementsByClassName('highScore')[0];
let highscore = 0;


function updateNewHighScore() {
    const oldHighScore = getHighScore();
    if (highScore === null) {
        localStorage.setItem("score", "0");
    };
    
        if (score > oldHighScore) {
            localStorage.setItem(`highScore`, score);
        };

        if (highScore >= '0') {
            getHighscore.innerHTML = localStorage.getItem('highScore');
        };
};
    
    function getHighScore() {
        return parseInt(localStorage.getItem("highScore")) || 0;
    };


// function updateNewHighScore() {

//     if (highScore === null) {
//         localStorage.setItem('score', '0');
//       }

//     if (allScores) {
//         localStorage.setItem("allScores", JSON.stringify([highScore]));
//         localStorage.setItem("highScore", highScore);
//     } else {
//         allScores = JSON.parse(allScores);
//         // allScores.push(score);
//         localStorage.setItem("allScores", JSON.stringify(allScores));
//     }

// 	// if (localStorage.getItem("highScore")) {
// 	// 	localStorage.setItem("highScore", highScore);
// 	// } else {
//         if (score > Math.max(...allScores)) {
//             localStorage.setItem("highscore", score);
//         };
// };


// function getNewHighScore() {
// 	return parseFloat(localStorage.getItem("highScore", score));
// }
    

// localStorage.setItem("Highscore", getNewHighScore());
