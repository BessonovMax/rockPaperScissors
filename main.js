/* this one was with the help of GPT */

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let choice;
  do {
    choice = prompt(
      "Choose you fighter! Enter 'rock', 'paper' or 'scissors'"
    ).toLowerCase();
  } while (!["rock", "paper", "scissors"].includes(choice));
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
      return "It's a tie!";
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
      return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      ++computerScore;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }
  do {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`You - ${humanScore} : Computer - ${computerScore}`);
  } while (humanScore !== 5 && computerScore !== 5);
  if (humanScore === 5) {
    console.log("Congratulations! You won this game!");
  } else {
    console.log("Sorry! You lost this one! Better luck next time!");
  }
}

playGame();

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
