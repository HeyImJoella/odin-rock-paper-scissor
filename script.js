const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const showResults = document.getElementById('results');
const updatePlayerScore = document.getElementById('playerscore');
const updateComputerScore = document.getElementById('computerscore');

rockBtn.addEventListener("click", () => (playRound("rock")));
paperBtn.addEventListener("click", () => (playRound("paper")));
scissorsBtn.addEventListener("click", () => (playRound("scissors")));

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice){
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice){
        showResults.innerText = "It's a draw!";
    }else if (playerChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        showResults.innerText = "Computer wins! Paper wraps rock.";
        updateComputerScore.innerText = "Computer: " + computerScore;
        endGame();
    }else if (playerChoice === "rock" && computerChoice === "scissors"){
        playerScore++;
        showResults.innerText = "Player wins! Rock smashes scissors.";
        updatePlayerScore.innerText = "Player: " + playerScore;
        endGame();
    }else if (playerChoice === "paper" && computerChoice === "rock"){
        playerScore++;
        showResults.innerText = "Player wins! Paper wraps rock.";
        updatePlayerScore.innerText = "Player: " + playerScore;
        endGame();
    }else if (playerChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        showResults.innerText = "Computer wins! Scissors cut paper.";
        updateComputerScore.innerText = "Computer: " + computerScore;
        endGame();
    }else if (playerChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        showResults.innerText = "Computer wins! Rock smashes scissors.";
        updateComputerScore.innerText = "Computer: " + computerScore;
        endGame();
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        playerScore++;
        showResults.innerText = "Player wins! Scissors cut paper.";
        updatePlayerScore.innerText = "Player: " + playerScore;
        endGame();
    }else{
        showResults.innerText = "No weapons were chosen.";
    }
};

function endGame(){
    if (playerScore === 3){
        return console.log("Player won the game. Want to play again?");
    }else if (computerScore === 3){
        return console.log("Computer won the game. Want to play again?");
    }
};



// Stop game bij 3 en mogelijkheid tot opnieuw beginnen