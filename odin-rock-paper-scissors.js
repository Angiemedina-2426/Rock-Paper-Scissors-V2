
function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    return 'scissors'
  }

}

function getHumanChoice() {
  let humanChoice = prompt('Choose rock, paper or scissors.', "");

  if (humanChoice === null) {
    return null;
  }

  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}



function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieRound = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie");
      tieRound++;
    } else if
      ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.Score: human = ${humanScore}, computer ${computerScore}`)
    } else {
      computerScore++;

      console.log(`You lose! ${computerChoice} beats ${humanChoice}.Score: human = ${humanScore}, computer ${computerScore}`)
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());


  if (humanScore > computerScore) {
    console.log(`You win!`)
  } else if (humanScore < computerScore) {
    console.log(`You lose!`);
  } else {
    console.log(`It's a tie!`);
  }

  console.log(` Final Score - Human: ${humanScore}, Computer: ${computerScore}, Ties: ${tieRound}`);
};
