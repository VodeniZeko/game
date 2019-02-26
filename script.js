let userScore = 0;
let compScore = 0;

let userScoreTd = document.getElementById('igrac');
let compScoreTd = document.getElementById('komp');
let nameRock = document.getElementById('q');
let namePaper = document.getElementById('w');
let nameScissors = document.getElementById('e');
let reset = document.getElementById('reset');

let descH2 = document.getElementById('desc');
let resultsH3 = document.getElementById('results');
let container = document.querySelector('table');

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

function updateColor () {
	if (userScore > compScore) {
		container.style.border = "4px solid green";
	} else if (compScore > userScore) {
		container.style.border = "4px solid red";
	} else {
		container.style.border = "4px solid grey";
	}
}

function buttonColor (selected) {
	namePaper.style.color = '';
	nameRock.style.color = '';
	nameScissors.style.color = '';
	if (selected === null) {
		return;
	}
	selected.style.color = 'black';
}

function updateScore () {
  userScoreTd.innerHTML = userScore;
  compScoreTd.innerHTML = compScore;
  updateColor();
}

function Play (choice) {
	let choice2 = Choice();
	let matchup = choice + choice2;
	console.log(matchup);
    switch (matchup) {
    	case 'rr':
    	case 'pp':
    	case 'ss':
    	resultsH3.innerHTML ="It's a DRAW (nerjeseno)";
	    	break;
    	case 'rs':
    	case 'pr':
    	case 'sp':
    	resultsH3.innerHTML ="You WON (pobjedio)";
		userScore++;
	    	break;
     	case 'sr':
    	case 'rp':
    	case 'ps':
    	resultsH3.innerHTML ="You LOSE (izgubio)";
    	compScore++;
	    	break;
    }
    updateScore();
}

function Choice () {
	let number = Math.floor(Math.random() * 3);
	switch(number) {
		case 0:
			descH2.innerHTML = 'Computer picked "Rock" (Kompjuter bira kamen)';
		return 'r';
		case 1:
			descH2.innerHTML = 'Computer picked "Paper" (Kompjuter bira papir)';
		return 'p';
		case 2:
			descH2.innerHTML = 'Computer picked "Scissors" (Kompjuter bira makaze)';
		return 's';
	}  
}

rock.addEventListener("click", function (){
	buttonColor(nameRock);
	Play('r');
})

paper.addEventListener("click", function () {
	buttonColor(namePaper);
	Play('p');

})

scissors.addEventListener("click", function (){
	buttonColor(nameScissors);
	Play('s');
})

reset.addEventListener('click', function() {
	userScore = 0;
	compScore = 0;
	updateColor();
	updateScore();
	buttonColor(null);
	
	
})