
const promt_message = "Please input ROCK, PAPER, or SCISSORS";
let error_prompt = ""
let f = 3;
let pC = 0;
let cC = 0;
let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let temp = getRandomInt(3);
    //console.log(temp)
    // 0 = ROCK, 1 = PAPER, 2 = SCISSORS

    return temp;
}

function getPlayerChoice(){
    return prompt(error_prompt + promt_message);
}

//console.log(getPlayerChoice())

function playGame(){
    playerScore = 0;
    computerScore = 0;
    let max_rounds = 5;

    for (let rounds = 0; rounds < max_rounds; rounds++) {
        
        playRound(rounds);
        
    }

    let winner = ""
    if(playerScore > computerScore){
        winner = "PLAYER "
    } else{
        winner = "COMPUTER "
    }
    if(playerScore === computerScore){
        winner = "NO ONE "
    }

    console.log("")
    console.log(winner + "is the winner! Thanks for playing.")
}

function playRound(number){

    console.log("--- Round " + number + " ---")
    pC = verifyPlayerChoice();
    cC = getComputerChoice();

    console.log("")
    if(pC === cC){
        console.log("DRAW!");
        console.log("Scores: Player has " + playerScore + " points. Computer has " + computerScore + " points.")
    } else{
        compare();
    }
    console.log("")
    console.log("")
}

function verifyPlayerChoice(){
    let c = getPlayerChoice();
    c = c.toUpperCase();
    f = 3;
    error_prompt = ""

    if(c === "ROCK"){
        f = 0;
    }
    if(c === "PAPER"){
        f = 1;
    }
    if(c === "SCISSORS"){
        f = 2;
    }

    if(f > 2){
        error_prompt = "You inputted incorrectly, please try again! "
        verifyPlayerChoice();
    }

    return f;
}

function compare(){

    switch(pC){
        case 0:
            if(cC === 1){
                computerWin();
            } else{
                playerWin();
            }
            break;
        case 1:
            if(cC === 2){
                computerWin();
            } else{
                playerWin();
            }
            break;
        case 2:
            if(cC === 0){
                computerWin();
            } else{
                playerWin();
            }
            break;
    }

    console.log("Scores: Player has " + playerScore + " points. Computer has " + computerScore + " points.")
}

function playerWin(){
    console.log("PLAYER WINS!")
    playerScore++;
}

function computerWin(){
    console.log("COMPUTER WINS!")
    computerScore++;
}

playGame();