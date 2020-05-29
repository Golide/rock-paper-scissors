const gameOptions = ['Rock', 'Paper', 'Scissors'];
let playerSelection;
let computerSelection;

function computerChoice() {
    return gameOptions[Math.floor(Math.random() * 3)];
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} 

function playerChoice() {
    do {
        playerSelection = capitalize(prompt('Rock, Paper or Scissors?'));
    } while (gameOptions.indexOf(playerSelection) == -1);
    return playerSelection;
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerChoice();
    computerSelection = computerChoice();

    console.log('Player Selection: ' + playerSelection);
    console.log('Computer Selection: ' + computerSelection);

    if (playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        console.log("Draw!");
        return "Draw";
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log("You Win! Rock beats Scissors.");
        return "Win";
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log("You Win! Paper beats Rock.");
        return "Win";
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('You Win! Scissors beats Paper.');
        return "Win";
    } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        console.log("You Lose! Rock beats Scissors.");
        return "Lose";
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        console.log("You Lose! Paper beats Rock.");
        return "Lose";
    } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        console.log('You Lose! Scissors beats Paper.');
        return "Lose";
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        switch (playRound(playerSelection, computerSelection)) {
            case 'Draw':
                break;
            case 'Win':
                playerScore++;
                break;
            case 'Lose':
                computerScore++;
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log(`Your Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log('Congratulations. You win!');
    } else if (playerScore < computerScore) {
        console.log(`Your Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log('Hard luck. You lose!');
    } else {
        console.log(`Your Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log('Honors even. Draw!');
    }
}

game();
