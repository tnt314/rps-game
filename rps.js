/*
 * Play five rounds
 * 1. Start a new game
 * 2. Increase the number of rounds by one
 * 3. Randomize computer selection of rock paper or scissors
 * 4. Prompt player to enter rock paper or scissors
 * 5. If player choice beats computer selection
 *     Print message "You win!"
 *     Add 1 to player score
 * 6. If computer selection beats player choice
 *     Print message "You lose!"
 *     Add 1 to computer score
 * 7. if number of rounds is less than 5
 *     Start another round
 * 8. If number of rounds is greater than or equal to 5
 *     Print the winner
 *     End game
 */

// Radomly select rock paper or scissors
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    
    if (n === 0) {
        return "rock";
    }
    else if (n === 1) {
        return "scissors";
    }
    else if (n === 2) {
        return "paper";
    }
}

// Single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Its a tie!"
    }
    else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            return "win"
        }
        else {
            return "lose"
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            return "win"
        }
        else {
            return "lose"
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return "win"
        }
        else {
            return "lose"
        }
    }
}

// Main game loop
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Choose rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        
        if (result === "win") {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (result === "lose") {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        else {
            console.log("Its a tie!")
        }
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("Draw!")
    }
}

game();