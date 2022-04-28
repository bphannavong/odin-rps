const choices = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    let rand = Math.floor(Math.random() * 3); //random from 0-2
    return choices[rand]; //choose random index from choices
}

function playRound(playerSelection, computerSelection) {
    //change both selections to uppercase for case sensitivity
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

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

function game() {
    //initialize scores
    let playerScore = 0;
    let computerScore = 0;

    //loop through 5 times, prompting and creating scores each time
    for (let i = 0; i < 5; i++){
        result = playRound(prompt('Rock, Paper, or Scissors?'), computerPlay())
        console.log(result);

        //if 5th character is l, then lose and comp gains point
        //else player gains one if 5th character is w
        if (result.charAt(4) === 'l') {
            computerScore++;
        } else if (result.charAt(4) === 'w') {
            playerScore++
        };
        console.log(`playerScore = ${playerScore}`);
        console.log(`computerScore = ${computerScore}`);
    }

    //return player wins if player score > computer score, comp wins if not.
    return playerScore > computerScore ? 'Player Wins!' : 'Computer Wins!';
}