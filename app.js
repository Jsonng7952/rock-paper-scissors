function computerPlay(){
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        result.innerHTML = `Tie! ${playerSelection} ties ${computerSelection}!`;
        score.innerHTML = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "scissor"){
            result.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            score.innerHTML = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
        else {
            result.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            compScore++;
            score.innerHTML = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            result.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            score.innerHTML = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
        else {
            result.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            compScore++;
            score.innerHTML = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
    }
    else if(playerSelection === "scissor"){
        if(computerSelection === "paper"){
            result.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            score.innerHTML = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
        else {
            result.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            compScore++;
            score.innerHTML = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
    }
    else {
        return "You entered invalid choice.";
    }

}

function checkWinner() {
    if(playerScore === compScore){
        outcome.innerHTML = `Tie Game!`;
    }
    else if(playerScore > compScore){
        outcome.innerHTML = `Player Win!`;
    }
    else {
        outcome.innerHTML = `Computer Win!`;
    }        
}

function afterButtonClick(button){
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    choice.innerHTML = `Player: [${playerSelection.toLowerCase()}] | Computer: [${computerSelection}]`;

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
    score.innerHTML = "Game: 0 | Player: 0 | Computer: 0";
    choice.innerHTML = "Pick Your Choice: Rock, Paper or Scissor."
    result.innerHTML = "&nbsp";
    outcome.innerHTML = "&nbsp";

    buttons.forEach((button) => {
        button.disabled = false;
    });

})
