// Variables constants
const homeScoreElem = document.querySelector(".home-score");
const awayScoreElem = document.querySelector(".away-score");
const homeAddPoint1 = document.querySelector(".addBtn.homePlusOne");
const homeAddPoint2 = document.querySelector(".addBtn.homePlusTwo");
const homeAddPoint3 = document.querySelector(".addBtn.homePlusThree");
const awayAddPoint1 = document.querySelector(".addBtn.awayPlusOne");
const awayAddPoint2 = document.querySelector(".addBtn.awayPlusTwo");
const awayAddPoint3 = document.querySelector(".addBtn.awayPlusThree");

const resetScoreBtn = document.querySelector(".resetBtn");

const modalSetTeams = document.querySelector(".modalSetTeams");
const modalCloseWindow = document.querySelector(".closeModal");
const setTeamsBtn = document.querySelector(".setTeamsBtn");
const saveTeamsBtn = document.querySelector(".saveTeamsBtn");
const resetTeamsBtn = document.querySelector(".resetTeamsBtn");

// Variables lets
let homeScore = 0;
let awayScore = 0;

let homeTeamName = document.querySelector(".home-team");
let awayTeamName = document.querySelector(".away-team");
let modalHomeName = document.querySelector("#setHomeTeam");
let modalAwayName = document.querySelector("#setAwayTeam");

// Functions to add 1,2 or 3 points for the Home-Team.
function homeScorePlusOne() {
  homeScore += 1;
  homeScoreElem.innerText = homeScore;
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

// Function to set the teams
function setTeams() {
  modalHomeName.value = "";
  modalAwayName.value = "";
  modalSetTeams.style.display = "flex";
}

function saveTeams() {
  if (modalHomeName.value === "") {
    modalHomeName.style.backgroundColor = "var(--clr-alert-empty)";
  }

  if (modalAwayName.value === "") {
    modalAwayName.style.backgroundColor = "var(--clr-alert-empty)";
  }

  if (modalHomeName.value !== "" && modalAwayName.value !== "") {
    homeTeamName.innerHTML = modalHomeName.value;
    awayTeamName.innerHTML = modalAwayName.value;
    modalSetTeams.style.display = "none";
  }
}

function resetTeams() {
  homeTeamName.innerHTML = "Home";
  awayTeamName.innerHTML = "Away";
  modalSetTeams.style.display = "none";
}

function closeModal() {
  modalSetTeams.style.display = "none";
}

// Click event for all the Addpoint-Buttons
homeAddPoint1.addEventListener("click", homeScorePlusOne);
homeAddPoint2.addEventListener("click", homeScorePlusTwo);
homeAddPoint3.addEventListener("click", homeScorePlusThree);
awayAddPoint1.addEventListener("click", awayScorePlusOne);
awayAddPoint2.addEventListener("click", awayScorePlusTwo);
awayAddPoint3.addEventListener("click", awayScorePlusThree);

// Click event for Reset-Button
resetScoreBtn.addEventListener("click", resetScore);

// Click event for setting the teams
setTeamsBtn.addEventListener("click", setTeams);
saveTeamsBtn.addEventListener("click", saveTeams);
resetTeamsBtn.addEventListener("click", resetTeams);
modalCloseWindow.addEventListener("click", closeModal);
