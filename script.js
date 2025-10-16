function getComputerChoice() {
  return Math.floor(Math.random() * 3); //max number is 2 starting from 0 giving three values that later given each for rock paper and scissor
}

getComputerChoice();

function getHumanChoice() {
  const choice = prompt("Enter your choice : Rock, Paper, Or Scissors");
  return choice;
}
const humanSelection = getHumanChoice();

let humanScore = 0;
let computerScore = 0;
