function computerPlay(){
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        result.textContent = `Tie! ${playerSelection} ties ${computerSelection}!`;
        score.textContent = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "scissor"){
            result.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            score.textContent = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
        else {
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            compScore++;
            score.textContent = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            result.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            score.textContent = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
        else {
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            compScore++;
            score.textContent = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
    }
    else if(playerSelection === "scissor"){
        if(computerSelection === "paper"){
            result.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            score.textContent = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
        else {
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            compScore++;
            score.textContent = `Game ${++gameNum} | Player: ${playerScore} | Computer: ${compScore}`;
        }
    }
    else {
        return "You entered invalid choice.";
    }

}

function checkWinner() {
    if(playerScore === compScore){
        outcome.textContent = `Tie Game!`;
        outcome.style = "font-size: larger; font-weight: bold";
    }
    else if(playerScore > compScore){
        outcome.textContent = `Player Win!`;
        outcome.style = "font-size: larger; font-weight: bold";
    }
    else {
        outcome.textContent = `Computer Win!`;
        outcome.style = "font-size: larger; font-weight: bold";
    }        
}

function afterButtonClick(button){
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    choice.textContent = `Player: [${playerSelection.toLowerCase()}] | Computer: [${computerSelection}]`;

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

const buttons = document.querySelectorAll('#rock, #paper, #scissor');
buttons.forEach((button) => {
    button.addEventListener('click', () => afterButtonClick(button))
});

const resetBtn = document.querySelector('.btn-container #reset');
resetBtn.addEventListener('click', () => {
    playerScore, compScore, gameNum = 0;
    score.innerText = "Game: 0 | Player: 0 | Computer: 0";
    choice.innerText = "Pick Your Choice: Rock, Paper or Scissor."
    result.innerText = ""
    outcome.innerText = "";
})
