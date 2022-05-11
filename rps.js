const choices = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    let rand = Math.floor(Math.random() * 3); //random from 0-2
    return choices[rand]; //choose random index from choices
}

function playRound(e) {
    //change both selections to uppercase for case sensitivity
    const playerSelection = e.target.id.toUpperCase();
    const computerSelection = computerPlay().toUpperCase();

    //check if player choice is valid
    if (!choices.includes(playerSelection)) { return 'invalid entry!' };

    //if  choices are the same, tie
    if (playerSelection === computerSelection) { return 'Tie!' }

    //show victory/defeats dependent on player/comp choices
    switch (playerSelection) {
        case 'ROCK':
            switch (computerSelection) {
                case 'PAPER': {
                    return 'You lose! Paper beats Rock!';
                }
                case 'SCISSORS': {
                    return 'You win! Rock beats Scissors!';
                }
            }
        case 'PAPER':
            switch (computerSelection) {
                case 'SCISSORS': {
                    return 'You lose! Scissors beats Paper!';
                }
                case 'ROCK': {
                    return 'You win! Paper beats Rock!';
                }
            }
        case 'SCISSORS':
            switch (computerSelection) {
                case 'ROCK': {
                    return 'You lose! Rock beats Scissors!';
                }
                case 'PAPER': {
                    return 'You win! Scissors beats Paper!';
                }
            }

    }
}

// function game() {
//     //initialize scores
//     let playerScore = 0;
//     let computerScore = 0;
//     message.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

//     result = playRound();s
//         //if 5th character is l, then lose and comp gains point
//         //else player gains one if 5th character is w
//     while (playerScore < 5 && computerScore < 5){
//         if (result.charAt(4) === 'l') {
//             computerScore++;
//         } else if (result.charAt(4) === 'w') {
//             playerScore++
//         };
//         message.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
//     }

//     //return player wins if player score > computer score, comp wins if not.
//     return playerScore > computerScore ? 'Player Wins!' : 'Computer Wins!';
// }

const playerChoice = document.querySelectorAll('.playerChoice');
let playerSelection;

playerChoice.forEach(btn => btn.addEventListener('click', function (e) {
    playerSelection = playRound(e);
}));

const scoreBoard = document.querySelector('.score-board');
const message = document.querySelector('.message');

let playerScore = 0;
let computerScore = 0;
message.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

//if 5th character is l, then lose and comp gains point
//else player gains one if 5th character is w
while (playerScore < 5 && computerScore < 5) {
    result = playerSelection;
    if (result.charAt(4) === 'l') {
        computerScore++;
    } else if (result.charAt(4) === 'w') {
        playerScore++
    };
    message.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}