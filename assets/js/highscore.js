let getHighScore = document.getElementsByClassName('highScore')[0];
let highScore = 0;

function updateNewHighScore() {
	const highScore = getHighScore;

	if (score > highScore) {
		localStorage.setItem("highScore", score);
	}

}

function getNewHighScore() {
	return parseFloat(localStorage.getItem("highScore", score));
}
    

localStorage.setItem("Highscore", updateNewHighScore());
