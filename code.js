
// define variables for player's and computer's choices and score
let playerChoice, computerChoice, playerScore = 0, computerScore = 0;

// function to generate computer's choice
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// function to play one round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'scissors' && computerSelection === 'paper' ||
             playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// function to play the game for a specified number of rounds
function game(rounds) {
  for (let i = 1; i <= rounds; i++) {
    playerChoice = prompt('Choose rock, paper, or scissors:');
    computerChoice = computerPlay();
    console.log(`Round ${i}: ${playRound(playerChoice, computerChoice)}`);
  }
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else if (playerScore < computerScore) {
    console.log('You lose the game!');
  } else {
    console.log('It\'s a tie!');
  }
}

// call the game function with the number of rounds as an argument
game(5);