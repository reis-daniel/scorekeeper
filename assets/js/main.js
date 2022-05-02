// Variables constants
const scoreboardContainer = document.querySelector(".scoreboard");

// Home and Away Score
const homeScoreElem = document.querySelector(".home-score");
const awayScoreElem = document.querySelector(".away-score");

// Buttons for adding Points and reset the score
const homeAddPoint1 = document.querySelector(".addBtn.homePlusOne");
const homeAddPoint2 = document.querySelector(".addBtn.homePlusTwo");
const homeAddPoint3 = document.querySelector(".addBtn.homePlusThree");
const awayAddPoint1 = document.querySelector(".addBtn.awayPlusOne");
const awayAddPoint2 = document.querySelector(".addBtn.awayPlusTwo");
const awayAddPoint3 = document.querySelector(".addBtn.awayPlusThree");
const resetScoreBtn = document.querySelector(".resetBtn");

// Variables for modal window
const modalSetTeams = document.querySelector(".modalSetTeams");
const modalCloseWindow = document.querySelector(".closeModal");
const setTeamsBtn = document.querySelector(".setTeamsBtn");
const saveTeamsBtn = document.querySelector(".saveTeamsBtn");
const resetTeamsBtn = document.querySelector(".resetTeamsBtn");

// Changable variables
let homeScore = 0;
let awayScore = 0;
let homeTeamName = document.querySelector(".home-team");
let awayTeamName = document.querySelector(".away-team");
let modalHomeName = document.querySelector("#setHomeTeam");
let modalAwayName = document.querySelector("#setAwayTeam");

// Function to add 1,2 or 3 for home or away Team
function pointsAdd() {
  if (this.classList.contains("teamHome")) {
    if (this.classList.contains("addOne")) {
      homeScore += 1;
      homeScoreElem.innerText = homeScore;
    } else if (this.classList.contains("addTwo")) {
      homeScore += 2;
      homeScoreElem.innerText = homeScore;
    } else if (this.classList.contains("addThree")) {
      homeScore += 3;
      homeScoreElem.innerText = homeScore;
    }
  } else {
    if (this.classList.contains("addOne")) {
      awayScore += 1;
      awayScoreElem.innerText = awayScore;
    } else if (this.classList.contains("addTwo")) {
      awayScore += 2;
      awayScoreElem.innerText = awayScore;
    } else if (this.classList.contains("addThree")) {
      awayScore += 3;
      awayScoreElem.innerText = awayScore;
    }
  }
}

// Function to reset score to 0
function resetScore() {
  homeScore = 0;
  awayScore = 0;
  homeScoreElem.innerHTML = homeScore;
  awayScoreElem.innerHTML = awayScore;
}

// Open modal window
function setTeams() {
  modalHomeName.value = "";
  modalAwayName.value = "";
  modalSetTeams.style.display = "flex";
  scoreboardContainer.classList.add("is-blurred");
}
// Write input values as team names
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
    scoreboardContainer.classList.remove("is-blurred");
  }
}

// Reset team names to default
function resetTeams() {
  homeTeamName.innerHTML = "Home";
  awayTeamName.innerHTML = "Away";
  modalSetTeams.style.display = "none";
  scoreboardContainer.classList.remove("is-blurred");
}

// Function to close modal window without saving or reseting values
function closeModal() {
  modalSetTeams.style.display = "none";
  scoreboardContainer.classList.remove("is-blurred");
}

// @Franzi, @Freddy:
// Wenn ich den Buttons ein Eventlistener inkl. Parameter gebe, warum wird das Click-Event beim ersten Laden der Seite direkt ausgeführt und danach nicht mehr?

// Click event for all the Addpoint-Buttons
homeAddPoint1.addEventListener("click", pointsAdd);
homeAddPoint2.addEventListener("click", pointsAdd);
homeAddPoint3.addEventListener("click", pointsAdd);
awayAddPoint1.addEventListener("click", pointsAdd);
awayAddPoint2.addEventListener("click", pointsAdd);
awayAddPoint3.addEventListener("click", pointsAdd);

// Click event for Reset-Button
resetScoreBtn.addEventListener("click", resetScore);

// Click event for setting the teams
setTeamsBtn.addEventListener("click", setTeams);
saveTeamsBtn.addEventListener("click", saveTeams);
resetTeamsBtn.addEventListener("click", resetTeams);
modalCloseWindow.addEventListener("click", closeModal);
