const choices = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    let rand = Math.floor(Math.random() * 3); //random from 0-2
    return choices[rand]; //choose random index from choices
}

function playRound(playerSelection) { //returns message for round winner
    //change both selections to uppercase for case sensitivity
    playerSelection = playerSelection.toUpperCase();
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

//game state = before game, during game, end game
// -1, 0 , 1
let gameState = -1;
let playerScore = 0;
let computerScore = 0;

//depending on game state, button does different things
const playerBtn = document.querySelectorAll('.playerBtn');
playerBtn.forEach(button => button.addEventListener('click', playGame));
const message = document.querySelector('.message');
const score = document.querySelector('.score');

function playGame(e) {
    let playerChoice = e.target.id;
//if game state = before
    if (gameState == -1) {
        playerScore = 0;
        computerScore = 0;
        gameState = 0;
    }
    //  then start game and play a round and update score accordingly
    //if game state = during
    if (gameState == 0) {
        //  if one of the score == 5 then end game state
        if (playerScore > 4 || computerScore > 4) {
            gameState = 1;
            return;
        }
    
    //  then play round and update score
        updateScore(playRound(playerChoice));
        if (playerScore > 4 || computerScore > 4) {
            gameState = 1;
            return;
        return;
        }
    }
    // if end game state
    //  then button will reset game state to before game state
    if (gameState == 1) {
        gameState = -1;
        return;
    }
}



function updateScore (string) { //returns winning of round
    result = string;
    if (result.charAt(4) === 'l') {
        computerScore++;
    } else if (result.charAt(4) === 'w') {
        playerScore++
    };
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    updateMessage(string);
}

function updateMessage (string) {
    if (gameState == -1) {
        message.textContent = 'Click on a button to start the game!';
    } else if (gameState == 0) {
        message.textContent = string;
    } else if (gameState == 1) {
        message.textContent = 'Click on a button to reset the game!';
    }
}