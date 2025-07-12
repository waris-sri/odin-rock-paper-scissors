let humanScore = 0;
let computerScore = 0;
let round = 1;

const roundDisplay = document.querySelector(".round");
const roundResults = document.querySelector(".round-results");

const comScoreSection = document.querySelector(".com");
const hmnScoreSection = document.querySelector(".hmn");

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const comScores = document.querySelector(".com-scores");
const hmnScores = document.querySelector(".hmn-scores");

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

roundResults.textContent = "You play first.";

// this is a nested object, used like a lookup table
const outcomes = {
  rock: { rock: "tie", paper: "computer", scissors: "human" },
  paper: { rock: "human", paper: "tie", scissors: "computer" },
  scissors: { rock: "computer", paper: "human", scissors: "tie" },
};

function playRound(humanChoice, computerChoice) {
  const result = outcomes[humanChoice][computerChoice];
  if (result === "tie") {
    roundDisplay.textContent = `Round ${round}`;
    roundResults.textContent = "Tie!";
  } else if (result === "human") {
    humanScore++;
    hmnScores.textContent = humanScore;
    roundDisplay.textContent = `Round ${round}`;
    roundResults.textContent = "Human won!";
  } else {
    computerScore++;
    comScores.textContent = computerScore;
    roundDisplay.textContent = `Round ${round}`;
    roundResults.textContent = "Computer won!";
  }
  round++;
  checkGameOver();
}

function checkGameOver() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      roundDisplay.textContent = "You won!";
      comScoreSection.style.cssText = "color: burlywood";
      hmnScoreSection.style.cssText = "color: teal";
    } else {
      roundDisplay.textContent = "You lost…";
      hmnScoreSection.style.cssText = "color: burlywood";
      comScoreSection.style.cssText = "color: teal";
    }
    rockBtn.disabled = paperBtn.disabled = scissorsBtn.disabled = true;
    rockBtn.style.opacity =
      paperBtn.style.opacity =
      scissorsBtn.style.opacity =
        0.4;
  }
}

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsBtn.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
