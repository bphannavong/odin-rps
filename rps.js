function computerPlay() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random()* 3); //random from 0-2
    
    return choice[rand]; //choose random index from choices
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (!playerSelection) return 'empty!';
    if (playerSelection === computerSelection) {return 'Tie!'}
    
    switch (playerSelection) { 
        case 'ROCK':
            switch (computerSelection){
                case 'PAPER': {
                    return 'You lose! Paper beats Rock!';
                }
                case 'SCISSORS': {
                    return 'You win! Rock beats Scissors!';
                }
            }

    }
}

const playerSelection = prompt('Rock, Paper, or Scissors?',);
const computerSelection = computerPlay();
