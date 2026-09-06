//=============================
// DOM ELEMENTS
//=============================

const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");


const quitButton = document.querySelector("#quit-btn");
const quitModal = document.querySelector("#quit-modal");
const quitConfirmButton = document.querySelector("#quitConfirmButton");
const cancelButton = document.querySelector("#cancelButton");


const yourChoiceImg = document.querySelector(".yourChoiceImg");
const computerChoiceImg = document.querySelector(".computerChoiceImg");


const buttons = document.querySelectorAll(".choice");


const result = document.querySelector(".resultStatement");
const finalResult = document.querySelector(".finalResult");


const yourScoreStatement = document.querySelector(".yourScore");
const computerScoreStatement = document.querySelector(".computerScore");


const resetButton = document.querySelector("#reset-btn");


//===============================
// GAME DATA 
//===============================

const choices = ["rock", "paper","scissors"];

const images = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png"
};

//===============================
// GAME STATE 
//===============================

let yourScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

//==============================
// GAME FUNCTIONS
//==============================

function getComputerChoice (){
    const randomNumber = Math.floor(Math.random()*choices.length);

    return choices[randomNumber];
}


function playRound (playerChoice, computerChoice){
    if (computerChoice === playerChoice){
        result.textContent = `It's a tie! You both chose ${playerChoice}.`;
    }
    else if ((playerChoice === "rock" &&computerChoice === "scissors") 
          ||(playerChoice === "paper" && computerChoice === "rock")
          || (playerChoice === "scissors" && computerChoice === "paper"))
    {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        yourScore++;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }
    yourScoreStatement.textContent = yourScore;
    computerScoreStatement.textContent = computerScore;
}

function displayFinalResult (){
    if (yourScore > computerScore){
        finalResult.textContent = "Final Result: You Win";
    }else if(yourScore < computerScore)
        {finalResult.textContent = "Final Result: You Lose";       
    }else{ finalResult.textContent = "Final Result: It's a tie!";     
    }
    setChoiceButtonsDisabled(true);
}

function setChoiceButtonsDisabled(disabled){
    buttons.forEach(button =>{
        button.disabled = disabled;
    })
}

function resetGame() {
    yourScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    yourScoreStatement.textContent = "0";
    computerScoreStatement.textContent = "0";

    result.textContent = "Let's begin. Click your choice below!";
    finalResult.textContent = "";

    yourChoiceImg.src = "images/questionmark.png";
    computerChoiceImg.src = "images/questionmark.png";

    setChoiceButtonsDisabled(false);
}


// =============================
// SCREEN CONTROL
// =============================

startButton.addEventListener("click", () => {
    resetGame();

    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
});

quitButton.addEventListener("click", () => {
    quitModal.classList.remove("hidden");
})

quitConfirmButton.addEventListener("click", () => {
    quitModal.classList.add("hidden");
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    resetGame();
})

cancelButton.addEventListener("click", () =>{
    quitModal.classList.add("hidden");
})

//=============================
// GAME EVENT LISTENERS
//=============================

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        if (roundsPlayed >= 5){
        return;
        }

        const playerChoice = button.dataset.choice;
        yourChoiceImg.src = images[playerChoice];

        const computerChoice = getComputerChoice();
        computerChoiceImg.src = images[computerChoice];

        playRound(playerChoice, computerChoice);

        roundsPlayed++;

        if(roundsPlayed === 5){
        displayFinalResult();
        }
    });
});

resetButton.addEventListener("click", resetGame);