// Variables constants
const homeScoreElem = document.querySelector(".home-score");
const awayScoreElem = document.querySelector(".away-score");
const homeAddPoint1 = document.querySelector(".addBtn.homePlusOne");
const homeAddPoint2 = document.querySelector(".addBtn.homePlusTwo");
const homeAddPoint3 = document.querySelector(".addBtn.homePlusThree");
const awayAddPoint1 = document.querySelector(".addBtn.awayPlusOne");
const awayAddPoint2 = document.querySelector(".addBtn.awayPlusTwo");
const awayAddPoint3 = document.querySelector(".addBtn.awayPlusThree");
const resetBtn = document.querySelector(".resetBtn");
// Variables lets
let homeScore = 0;
let awayScore = 0;

// Functions to add 1,2 or 3 points for the Home-Team.
function homeScorePlusOne() {
  homeScore += 1;
  homeScoreElem.innerHTML = homeScore;
}

function homeScorePlusTwo() {
  homeScore += 2;
  homeScoreElem.innerHTML = homeScore;
}
function homeScorePlusThree() {
  homeScore += 3;
  homeScoreElem.innerHTML = homeScore;
}

// Functions to add 1,2 or 3 points for the Home-Team.
function awayScorePlusOne() {
  awayScore += 1;
  awayScoreElem.innerHTML = awayScore;
}

function awayScorePlusTwo() {
  awayScore += 2;
  awayScoreElem.innerHTML = awayScore;
}
function awayScorePlusThree() {
  awayScore += 3;
  awayScoreElem.innerHTML = awayScore;
}

// Function to reset score to 0
function resetScore() {
  homeScore = 0;
  homeScoreElem.innerHTML = homeScore;
  awayScore = 0;
  awayScoreElem.innerHTML = awayScore;
}

// Click event for all the Addpoint-Buttons
homeAddPoint1.addEventListener("click", homeScorePlusOne);
homeAddPoint2.addEventListener("click", homeScorePlusTwo);
homeAddPoint3.addEventListener("click", homeScorePlusThree);
awayAddPoint1.addEventListener("click", awayScorePlusOne);
awayAddPoint2.addEventListener("click", awayScorePlusTwo);
awayAddPoint3.addEventListener("click", awayScorePlusThree);

// Click event for Reset-Button
resetBtn.addEventListener("click", resetScore);
