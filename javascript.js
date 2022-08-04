let computerChoice = null;

function getComputerChoice () {
     //We need the computer to get a number from 0 - 2//
    let max = 2;
    let min = 0;
    let randNum = Math.floor(Math.random()*(max-min+1));
    //If the number is 0 the choice is rock//
    if (randNum === 0) {
        return computerChoice = "rock";
    } else if (randNum === 1) {
     //If the number is 1 then the choice is paper//
        return computerChoice = "paper";
    } else {
        //If the number is 2 then the choice is scissors//
        return computerChoice = "scissors";
    }  
}

function playRound (playerSelection,computerSelection) {
    //I need a win message//
    let winMessage = () => console.log(`Congratulations, you beat me! It's true, ${playerSelection} does beat ${computerSelection}!`);
    //I need a lose message with why I lost//
    let loseMessage = () => console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
    //Can't forget the tie message//
    let tieMessage = () => console.log("It's a tie, I guess none of us win");
    //Capitalization cannot effect the outcome//
    playerSelection = playerSelection.toLowerCase();
    //Messages for each outcome of the game//
    if (playerSelection === computerSelection) {
        tieMessage();  
    }else if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" ||playerSelection === "rock" && computerSelection === "scissors") {
        winMessage();
    } else if (playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper") {
        loseMessage();
    }
}

let playerSelection = "scissors";
let computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
