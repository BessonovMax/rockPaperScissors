/* this one was with the help of GPT */

const btn_rock = document.querySelector("#rock");
const btn_paper = document.querySelector("#paper");
const btn_scissors = document.querySelector("#scissors");

const game_window = document.querySelector(".game_window");

const player_score = document.querySelector("#player_score");
const computer_score = document.querySelector("#computer_score");

const asyncTimeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
btn_rock.addEventListener("click", () =>
  playGame(btn_rock.value, getComputerChoice())
);
btn_paper.addEventListener("click", () =>
  playGame(btn_paper.value, getComputerChoice())
);
btn_scissors.addEventListener("click", () =>
  playGame(btn_scissors.value, getComputerChoice())
);

function createNewDiv(content) {
  const newDiv = document.createElement("div");
  newDiv.textContent = content;
  game_window.appendChild(newDiv);
}

let humanScore = 0;
let computerScore = 0;
function playGame() {
  async function playRound(humanChoice, computerChoice) {
    createNewDiv(`You chose ${humanChoice}`);
    await asyncTimeout(1000);
    createNewDiv(`Computer chose ${computerChoice}`);
    await asyncTimeout(1000);
    if (humanChoice === computerChoice) {
      createNewDiv("It's a tie!");
      return;
    }
    const outcomes = {
      rock: {
        paper: "lose",
        scissors: "win",
      },
      paper: {
        rock: "win",
        scissors: "lose",
      },
      scissors: {
        rock: "lose",
        paper: "win",
      },
    };
    if (outcomes[humanChoice][computerChoice] === "win") {
      ++humanScore;
      player_score.textContent = humanScore;
      createNewDiv(`You win! ${humanChoice} beats ${computerChoice}`);
      await asyncTimeout(1000);
    } else {
      ++computerScore;
      computer_score.textContent = computerScore;
      createNewDiv(`You lose! ${computerChoice} beats ${humanChoice}`);
      await asyncTimeout(1000);
    }
  }
  playRound(...arguments);
}
/*  My shitty variant
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  return prompt();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toLowerCase();
    if (
      humanSelection !== "rock" &&
      humanSelection !== "paper" &&
      humanSelection !== "scissors"
    ) {
      throw new Error('You should type "rock", "paper" or "scissors"');
    }
    if (humanSelection === computerChoice) {
      return "It's a tie! Try again!";
    } else if (humanSelection === "paper" && computerChoice === "scissors") {
      ++computerScore;
      return "You lose! Scissors beat paper.";
    } else if (humanSelection === "paper" && computerChoice === "rock") {
      ++humanScore;
      return "You win! Paper beats rock.";
    } else if (humanSelection === "scissors" && computerChoice === "paper") {
      ++humanScore;
      return "You win! Scissors beat paper.";
    } else if (humanSelection === "scissors" && computerChoice === "rock") {
      ++computerScore;
      return "You lose! Rock beats scissors.";
    } else if (humanSelection === "rock" && computerChoice === "paper") {
      ++computerScore;
      return "You lose! Paper beats rock.";
    } else if (humanSelection === "rock" && computerChoice === "scissors") {
      ++humanScore;
      return "You win! Rock beat scissors.";
    }
  }
  do {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  } while (humanScore !== 5 && computerScore !== 5);
  if (humanScore === 5) {
    console.log("Congatulations! You won!");
  } else {
    console.log("Sorry! You lose!");
  }
}

playGame();

*/
