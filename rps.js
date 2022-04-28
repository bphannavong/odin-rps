const choices = ['ROCK', 'PAPER', 'SCISSORS'];
const playerSelection = prompt('Rock, Paper, or Scissors?',);
const computerSelection = computerPlay();

function computerPlay() {
    let rand = Math.floor(Math.random()* 3); //random from 0-2
    return choices[rand]; //choose random index from choices
}

function playRound(playerSelection, computerSelection) {
    //change both selections to uppercase for case sensitivity
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    //check if player choice is valid
    if (!choices.includes(playerSelection)) {return 'invalid entry!'};

    //if  choices are the same, tie
    if (playerSelection === computerSelection) {return 'Tie!'}

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


console.log(playRound(playerSelection, computerSelection));
