let playerScore = 0;
let compScore = 0;

document.getElementById("pt").innerHTML = playerScore;
document.getElementById("ct").innerHTML = compScore;

function getComputerChoice() {
    const arr = ["Paper", "Rock", "Scissors"];
                const compChoice = arr[Math.floor(Math.random() * arr.length)];
    return compChoice; }

function play(choice) {

    let playerSelection = choice;
    let computerSelection = getComputerChoice();

if (playerScore < 5 && compScore < 5) {    
    if (playerSelection === computerSelection ) {
        document.getElementById("field").innerHTML =`This round is a draw.`; 
document.getElementById("pt").innerHTML = playerScore;
document.getElementById("ct").innerHTML = compScore;
}
    else if (playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        document.getElementById("field").innerHTML = `${playerSelection
} beats ${computerSelection }! You win!!!`; 
document.getElementById("pt").innerHTML = playerScore;
document.getElementById("ct").innerHTML = compScore;
    }
    else {
        compScore++;
        document.getElementById("field").innerHTML = `${playerSelection
} is beaten by ${computerSelection }. You lose.`;
document.getElementById("pt").innerHTML = playerScore;
document.getElementById("ct").innerHTML = compScore;
    }
}

if (playerScore === 5) {
    document.getElementById("podium").innerHTML = "Player Wins!!";
} else if (compScore === 5) {
    document.getElementById("podium").innerHTML = "Computer Wins!!";
}
}