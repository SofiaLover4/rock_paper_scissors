let computerChoice = null;
let playerScore = 0;
let computerScore = 0;
let gameRounds = 1;
let winnerMessage = (winner,loser) => matchWinner.textContent =`${winner} have won the match on round ${gameRounds - 1}. ${loser} have lost the match. `;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const results = document.querySelector('.results');
const cards = document.querySelector('.cards');
const result = document.querySelector('.result');
const yourScore = document.querySelector('.Your_Score');
const rounds = document.querySelector('.Rounds');
const enemyScore = document.querySelector('.Computer_Score');
const matchWinner = document.querySelector('.winner');
const startBtn = document.querySelector('.start_btn');
const endContent = document.querySelector('.endContent');
const exitBtn = document.querySelector('.exitBtn');
const resetBtn = document.querySelector('.resetBtn');

rockBtn.addEventListener('click',playRoundRock);
paperBtn.addEventListener('click',playRoundPaper);
scissorsBtn.addEventListener('click', playRoundScissors);
startBtn.addEventListener('click',startGame);
resetBtn.addEventListener('click',resetMatch);
exitBtn.addEventListener('click',exitGame);

function displayStats (){
    yourScore.textContent = `Your score is ${playerScore}`;
    rounds.textContent = `Round: ${gameRounds}`;
    enemyScore.textContent = `Computer score is ${computerScore}`;
}

displayStats();

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

function playRoundRock () {
    playRound("rock",getComputerChoice())
}

function playRoundPaper () {
    playRound("paper",getComputerChoice())
}

function playRoundScissors () {
    playRound("scissors",getComputerChoice())
}

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    gameRounds = 0;
}

function startGame () {
    rockBtn.classList.toggle('game');
    paperBtn.classList.toggle('game');
    scissorsBtn.classList.toggle('game');
    results.classList.toggle('game');
    cards.classList.toggle('game');
    startBtn.classList.toggle('game');
    resetGame();
}

function checkWinner () {
    if(playerScore === 5) {
        winnerMessage("You","I");
        endGame();
    } else if (computerScore === 5) {
        winnerMessage("I", "you")
        endGame();
    }
}

function toggleEndBtns () {
    exitBtn.classList.toggle('game');
    resetBtn.classList.toggle('game');
    endContent.classList.toggle('game');
}

function endGame (){
    rockBtn.removeEventListener('click', playRoundRock);
    paperBtn.removeEventListener('click', playRoundPaper);
    scissorsBtn.removeEventListener('click', playRoundScissors);
    toggleEndBtns();

}

function resetMatch () {
    toggleEndBtns();
    resetGame();
    displayStats();
    rockBtn.addEventListener('click',playRoundRock);
    paperBtn.addEventListener('click',playRoundPaper);
    scissorsBtn.addEventListener('click', playRoundScissors);
    result.textContent = "";
    matchWinner.textContent = "";
}

function exitGame () {
    rockBtn.classList.toggle('game');
    paperBtn.classList.toggle('game');
    scissorsBtn.classList.toggle('game');
    results.classList.toggle('game');
    cards.classList.toggle('game');
    startBtn.classList.toggle('game');
    resetMatch();
}

function playRound (playerSelection,computerSelection) {
    //I need a win message//
    let winMessage = () => result.textContent = `Congratulations, you beat me! It's true, ${playerSelection} does beat ${computerSelection}!`;
    //I need a lose message with why I lost//
    let loseMessage = () => result.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
    //Can't forget the tie message//
    let tieMessage = () => result.textContent = "It's a tie, I guess none of us win. We won't count this round.";
    //Capitalization cannot effect the outcome//
    playerSelection = playerSelection.toLowerCase();
    //A message in case the word is not any of the possible words//
    let errorMessage = () => result.textContent = "Hey! That's not a word you can use in this game!";
    //Return the user a message if they word they put is not in the game//
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {  
        errorMessage();
    //All the outcomes for the game//
    } else if (playerSelection === computerSelection) {
        tieMessage(); 
    } else if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" ||playerSelection === "rock" && computerSelection === "scissors") {
        winMessage();
        playerScore++;
        gameRounds++;
        displayStats();
        checkWinner();
    } else if (playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper") {
        loseMessage();
        computerScore++;
        gameRounds++;
        displayStats();
        checkWinner();
    }
   
}
