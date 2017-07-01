var fantasyWords = [
"dragons",
"wizards",
"swords",
"magick",
"adventure",
"dungeonmaster",
"baldursgate",
];

//store words in variable
var word = "";
var answerArray = [];

//initialize new game

	function initialize(){
	//pick random word
	word = fantasyWords[Math.floor(Math.random() * fantasyWords.length)];

	//answer array
	answerArray = [];
	for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
	}
	document.getElementById("answer").innerHTML= answerArray.join(" ");
	document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
}
initialize();

//actual game loop

function guessOne() {
	//obtain guess letter
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";

	if (guess.length !== 1) {
		showThisMessage ="Please enter only a single letter";
	} else {
		var i = 0;
		for (i = 0; i <word.length; i++) {
			if (word[i] === guess) {
				answerArray[i] = guess;
				showThisMessage = "Good guess!"; 
			}
		}

		var remaining_letters = answerArray.length;
		for (i = 0; i <answerArray.length; i++) {
			if (answerArray[i] !== "_") {
				remaining_letters -= 1;
			}
		}

		if (remaining_letters === 0) {
			showThisMessage = "YES! You are a NERD!!";
		}

		if (showThisMessage === "") {
			showThisMessage = "Sorry, not part of the word";
		}

		document.getElementById("answer").innerHTML = answerArray.join(" ");

		document.getElementById("guess").value = "";
	}
		document.getElementById("message").innerHTML = showThisMessage;
}

//quit function

function quit() {
    document.getElementById("message").innerHTML = "The word was "+word;
    for (var j = 0; j < word.length; j++) {
        answerArray[j] = word[j];
    }
    // Solve the puzzle
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}
