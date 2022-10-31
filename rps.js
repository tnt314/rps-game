/*
 * Play five rounds
 * 1. Start a new game
 * 2. Increase the number of rounds by one
 * 3. Randomize computer selection of rock paper or scissors
 * 4. Prompt player to enter rock paper or scissors
 * 5. If player choice beats computer selection
 *     Print message "You win!"
 * 6. If computer selection beats player choice
 *     Print message "You lose!"
 * 7. if number of rounds is less than 5
 *     Start another round
 * 8. If number of rounds is greater than or equal to 5
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


