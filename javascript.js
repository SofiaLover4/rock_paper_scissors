computerChoice = undefined;

function getComputerChoice () {
     //We need the computer to get a number from 0 - 2//
    let max = 2;
    let min = 0;
    let randNum = Math.floor(Math.random()*(max-min+1));
    //If the number is 0 the choice is rock//
    if (randNum === 0) {
        computerChoice = "rock";
    } else if (randNum === 1) {
     //If the number is 1 then the choice is paper//
        computerChoice = "paper";
    } else {
        //If the number is 2 then the choice is scissors//
        computerChoice = "scissors";
    }   
    console.log (computerChoice);
}
