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
    //A message in case the word is not any of the possible words//
    let errorMessage = () => console.log("Hey! That's not a word you can use in this game!")
    //Return the user a message if they word they put is not in the game//
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {  
        errorMessage();
        roundStatus = null;
    //All the outcomes for the game//
    } else if (playerSelection === computerSelection) {
        tieMessage(); 
        roundStatus = null;
    } else if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" ||playerSelection === "rock" && computerSelection === "scissors") {
        winMessage();
        roundStatus = true;
    } else if (playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper") {
        loseMessage();
        roundStatus = false;
    }
   
}

let finalMessage = (finalWinner,finalLoser,winnerScore,loserScore) => console.log(`And the winner is ${finalWinner} with ${winnerScore} games won. The loser is ${finalLoser} with ${loserScore} games won.`)


function game () {
    let rounds = 0;
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; rounds < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, paper, scissors, shoot!")
        playRound(playerSelection,computerSelection);
        if (roundStatus === true){
            playerCount++;
            rounds++;
        } else if (roundStatus === false) {
            computerCount++; 
            rounds++;
        }else if (roundStatus === null){
            console.log("Hmmm, let's not count this round then.")
        }
        console.log(`Round: ${rounds}`);
        console.log(`Your score: ${playerCount}`);
        console.log(`Opponent's score: ${computerCount}`);
    }
    if (playerCount > computerCount){
        finalMessage("you","me",playerCount,computerCount);
    }else {
        finalMessage("me","you", computerCount,playerCount);
    }

    askPlayer();
    }
    let noPlayMessage = () => console.log("Alright then we don't play")

function askPlayer () {
    let question = prompt("Do you want to play rock paper scissors?").toLowerCase();
    if (question === "yes") {
        game();
    } else {
        noPlayMessage();
    } 
}

askPlayer();
