let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("button#rock");
const paperButton = document.querySelector("button#paper");
const scissorsButton = document.querySelector("button#scissors");

rockButton.addEventListener("click", () =>{
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});

paperButton.addEventListener("click", () =>{
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});

scissorsButton.addEventListener("click", () =>{
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
});

const resultDiv = document.querySelector("div#result");
const scoreDiv = document.querySelector("div#score");



function resetGame(){
    humanScore = 0;
    computerScore = 0;
    updateScore();
    resultDiv.textContent = "";
}

function checkEndOfGame(){
    if(humanScore >= 5){
        alert("You win the game.");
        resetGame();
    } else if (computerScore >= 5){
        alert("Sorry, computer wins this time.");
        resetGame();
    }
}

function updateScore(winner){
    if(winner == "Human") humanScore++;
    else if (winner == "Computer") computerScore++;
    scoreDiv.textContent = "Your score: " + humanScore + ", Computer score: " + computerScore;
    checkEndOfGame();
}
updateScore();



//console.log("Play rock, paper and scissors for 5 rounds.");
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case "rock":
            switch(computerChoice){
                case "rock":
                    resultDiv.textContent = "Draw.";
                    break;
                case "paper":
                    resultDiv.textContent = "You lose. Paper beats rock.";
                    updateScore("Computer");
                    break;
                case "scissors":
                    resultDiv.textContent = "You win! Rock beats scissors.";
                    updateScore("Human");
                    break;
            }
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    resultDiv.textContent = "You win! Paper beats rock.";
                    updateScore("Human");
                    break;
                case "paper":
                    resultDiv.textContent = "Draw.";
                    break;
                case "scissors":
                    resultDiv.textContent = "You lose. Scissors beat paper.";
                    updateScore("Computer");
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                    resultDiv.textContent = "You lose. Rock beats scissors.";
                    updateScore("Computer");
                    break;
                case "paper":
                    resultDiv.textContent = "You win! Scissors beat paper.";
                    updateScore("Human");
                    break;
                case "scissors":
                    resultDiv.textContent = "Draw.";
                    break;
            }
            break;
    }
}