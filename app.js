function computerPlay(){
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        result.innerText = `Tie! ${playerSelection} ties ${computerSelection}!`;
        score.innerText = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "scissor"){
            result.innerText = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            score.innerText = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
        else {
            result.innerText = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            compScore++;
            score.innerText = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            result.innerText = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            score.innerText = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
        else {
            result.innerText = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            compScore++;
            score.innerText = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
    }
    else if(playerSelection === "scissor"){
        if(computerSelection === "paper"){
            result.innerText = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            score.innerText = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
        else {
            result.innerText = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            compScore++;
            score.innerText = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
    }
    else {
        return "You entered invalid choice.";
    }

}

function checkWinner() {
    if(playerScore === compScore){
        outcome.innerText = `Tie Game!`;
        outcome.style = "font-size: larger; font-weight: bold";
    }
    else if(playerScore > compScore){
        outcome.innerText = `Player Win!`;
        outcome.style = "font-size: larger; font-weight: bold";
    }
    else {
        outcome.innerText = `Computer Win!`;
        outcome.style = "font-size: larger; font-weight: bold";
    }        
}

function afterButtonClick(button){
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    choice.innerText = `Player: [${playerSelection.toLowerCase()}] | Computer: [${computerSelection}]`;

    // After 5 games, check for winner and disable buttons.
    if(gameNum === 5){
        checkWinner();
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

let playerScore = 0;
let compScore = 0;
let gameNum = 0;

const score = document.querySelector('.score');
const choice = document.querySelector('.choice');
const result = document.querySelector('.result');
const outcome = document.querySelector('.outcome');

// Add listeners for rock, paper, and scissor.
const buttons = document.querySelectorAll('#rock, #paper, #scissor');
buttons.forEach((button) => {
    button.addEventListener('click', () => afterButtonClick(button))
});

// Reset the game
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    playerScore = 0, compScore = 0, gameNum = 0;
    score.innerText = "Game: 0 | Player: 0 | Computer: 0";
    choice.innerText = "Pick Your Choice: Rock, Paper or Scissor."
    result.innerText = ""
    outcome.innerText = "";

    buttons.forEach((button) => {
        button.disabled = false;
    });

})
