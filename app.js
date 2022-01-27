function computerPlay(){
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        console.log(results = `Tie! ${playerSelection} ties ${computerSelection}!`);
        return 3;
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "scissor"){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
            return 1;
        }
        else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
            return 2;
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
            return 1;
        }
        else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
            return 2;
        }
    }
    else if(playerSelection === "scissor"){
        if(computerSelection === "paper"){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
            return 1;
        }
        else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
            return 2;
        }
    }
    else {
        return "You entered invalid choice.";
    }

}

function game(){
    let playerWin = 0;
    let compWin = 0;
    for(let i = 0; i < 5; i++){

        let playerSelection = window.prompt("Enter Your Choice: Rock, Paper or Scissor.");
        let computerSelection = computerPlay();

        console.log(`Game ${i +1}: Player: [${playerSelection.toLowerCase()}] | Computer: [${computerSelection}]`)

        let results = playRound(playerSelection, computerSelection);
        if(results === 1) {
            playerWin++;
            console.log(`Player: ${playerWin} | Computer: ${compWin}`);
        }
        else if(results === 2) {
            compWin++;
            console.log(`Player: ${playerWin} | Computer: ${compWin}`);
        }
        else if(results === 3){
            console.log(`Player: ${playerWin} | Computer: ${compWin}`);
        }

        console.log("");

    }

    if(playerWin === compWin){
        console.log(`Tie Game! | Player: ${playerWin} | Computer: ${compWin}`);
    }
    else if(playerWin > compWin){
        console.log(`You Win! | Player: ${playerWin} | Computer: ${compWin}`);
    }
    else {
        console.log(`You Lose! | Player: ${playerWin} | Computer: ${compWin}`)
    }
}

game();

/*
    rock:
        rock > scissor
        rock < paper

    paper:
        paper > rock
        paper < scissor

    scissor:
        scissor > paper
        scissor < rock

*/
