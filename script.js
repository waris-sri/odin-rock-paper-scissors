function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHumanChoice() {
  return prompt("Your turn!");
}

function getComputerChoice() {
  const randomized = getRandomInt(0, 2);
  if (randomized == 0) {
    return "rock";
  } else if (randomized == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // this is a nested object
  const outcomes = {
    rock: { rock: "tie", paper: "computer", scissors: "human" },
    paper: { rock: "human", paper: "tie", scissors: "computer" },
    scissors: { rock: "computer", paper: "human", scissors: "tie" },
  };
  const result = outcomes[humanChoice][computerChoice];

  if (result === "tie") {
    alert(
      `=== TIE! ===\nComputer: ${computerChoice}\nHuman: ${humanChoice}\nCOM ${computerScore} - HMN ${humanScore}`
    );
  } else if (result === "human") {
    humanScore++;
    alert(
      `=== HUMAN WON! ===\nComputer: ${computerChoice}\nHuman: ${humanChoice}\nCOM ${computerScore} - HMN ${humanScore}`
    );
  } else {
    computerScore++;
    alert(
      `=== COMPUTER WON! ===\nComputer: ${computerChoice}\nHuman: ${humanChoice}\nCOM ${computerScore} - HMN ${humanScore}`
    );
  }
}

let i = 0;
while (humanScore < 5 && computerScore < 5) {
  alert(`Round ${i + 1}`);
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  i++;
}

alert(
  `Final Scores\nCOM ${computerScore} - HMN ${humanScore}\n${
    humanScore > computerScore ? "You won!" : "Computer won!"
  }`
);
