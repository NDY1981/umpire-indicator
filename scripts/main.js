/* Scripting for the Umpire Indicator: */

const StrikesOutput = document.querySelector("#StrikesOutput");
const StrikesButton = document.querySelector("#StrikesButton");
const BallsOutput = document.querySelector("#BallsOutput");
const BallsButton = document.querySelector("#BallsButton");
const OutsOutput = document.querySelector("#OutsOutput");
const OutsButton = document.querySelector("#OutsButton");

let StrikesCount = 0;
let BallsCount = 0;
let OutsCount = 0;

StrikesOutput.textContent = StrikesCount;
BallsOutput.textContent = BallsCount;
OutsOutput.textContent = OutsCount;

function AddStrikes() {
	if (StrikesCount == 3) {
		StrikesCount = 0;
	} else {
		StrikesCount = StrikesCount + 1;
	}
	StrikesOutput.textContent = StrikesCount;
}

function AddBalls() {
	if (BallsCount === 4) {
		BallsCount = 0;
	} else {
		BallsCount = BallsCount + 1;
	}
	BallsOutput.textContent = BallsCount;
}

function AddOuts() {
	if (OutsCount === 3) {
		OutsCount = 0;
	} else {
		OutsCount = OutsCount + 1;
	}
	OutsOutput.textContent = OutsCount;
}

StrikesButton.addEventListener("click", AddStrikes);
BallsButton.addEventListener("click", AddBalls);
OutsButton.addEventListener("click", AddOuts);
