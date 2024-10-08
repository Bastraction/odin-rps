
//const promt_message = "Please input ROCK, PAPER, or SCISSORS"; - Unnecessary memory usage
//let error_prompt = "" - Unnecessary memory usage
//let f = 3; - Unnecessary memory usage
//let pC = 0; - Unnecessary memory usage
//let cC = 0; - Unnecessary memory usage
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

const pScoreText = document.querySelector("#player_score");
const cpuScoreText = document.querySelector("#cpu_score");
const cpu_button = document.querySelector("#cpu_throw");

const logger = document.querySelector("#logger_window");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let temp = getRandomInt(3);
    //console.log(temp)
    // 0 = ROCK, 1 = PAPER, 2 = SCISSORS

    switch(temp){
        case 0:
            cpu_button.textContent = "CPU: ROCK";
            break;
        case 1:
            cpu_button.textContent = "CPU: PAPER";
            break;
        case 2:
            cpu_button.textContent = "CPU: SCISSORS";
            break;
    }

    return temp;
}

/* --- DEPRECATED ---
function getPlayerChoice(){
    return prompt(error_prompt + promt_message);
}

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
--- DEPRECATED ---*/

function playRound(pC){

    console.log("--- Round " + roundNumber + " ---")
    //pC = verifyPlayerChoice(); -- Old way
    let tempDiv = document.createElement("div");
    tempDiv.classList.add("log_item");
    cC = getComputerChoice();

    console.log("")
    if(pC === cC){
        console.log("DRAW!");
        console.log("Scores: Player has " + playerScore + " points. Computer has " + computerScore + " points.")

        tempDiv.textContent = "Round " + roundNumber + ": DRAW!";
    } else{
        switch(compare(pC, cC)){
            case 0:
                tempDiv.textContent = "Round " + roundNumber + ": PLAYER WIN!";
                break;
            case 1:
                tempDiv.textContent = "Round " + roundNumber + ": CPU WIN!";
                break;
        }
    }
    console.log("")
    console.log("")

    logger.appendChild(tempDiv);

    roundNumber++;
}

/* --- DEPRECATED ---
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
--- DEPRECATED ---*/

function compare(pC, cC){

    let tmp_outcome = 0;

    switch(pC){
        case 0:
            if(cC === 1){
                computerWin();
                tmp_outcome = 1;
            } else{
                playerWin();
            }
            break;
        case 1:
            if(cC === 2){
                computerWin();
                tmp_outcome = 1;
            } else{
                playerWin();
            }
            break;
        case 2:
            if(cC === 0){
                computerWin();
                tmp_outcome = 1;
            } else{
                playerWin();
            }
            break;
    }

    return tmp_outcome;

    console.log("Scores: Player has " + playerScore + " points. Computer has " + computerScore + " points.")
}


function playerWin(){
    console.log("PLAYER WINS!")
    playerScore++;
    pScoreText.textContent = 'Player Score: ' + playerScore;
}

function computerWin(){
    console.log("COMPUTER WINS!")
    computerScore++;
    cpuScoreText.textContent = 'CPU Score: ' + computerScore;
}

//playGame();
const btn = document.querySelector("#rock");
const btn2 = document.querySelector("#paper");
const btn3 = document.querySelector("#scissors");

btn.onclick = () => playRound(0);
btn2.onclick = () => playRound(1);
btn3.onclick = () => playRound(2);
