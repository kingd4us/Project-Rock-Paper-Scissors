function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); //max number is 2 starting from 0 giving three values that later given each for rock paper and scissor
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter your choice : Rock, Paper, Or Scissors");
  while (
    choice &&
    !["rock", "paper", "scissors"].includes(choice.toLowerCase())
  ) {
    choice = prompt(
      `Invalid choice. Please enter "Rock", "Paper", or "Scissors".`
    );
  }
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();

    console.log(`You chose ${human}. The Computer chose: ${computerChoice}`);

    if (human === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (human === "rock" && computerChoice === "scissors") ||
      (human === "paper" && computerChoice === "rock") ||
      (human === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You Win! ${human} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${human}.`);
      computerScore++;
    }
  }

  let i = 1;
  while (true) {
    console.log(`\n--- Round ${i}`);
    const humanSelection = getHumanChoice();
    if (humanSelection === null) {
      return;
    }
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log(
      `Current Score -> You: ${humanScore} - Computer: ${computerScore}`
    );
    if (humanScore === 3 || computerScore === 3) {
      break;
    }
    i++;
  }
  console.log("\n--- Game Over ---");
  console.log(`Final Score -> You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("The computer won the game. Better luck next time!");
  } else {
    console.log("The game ended in a tie!");
  }
}

playGame();
