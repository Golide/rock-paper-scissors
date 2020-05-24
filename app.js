const gameOptions = ['Rock', 'Paper', 'Scissors'];

function computerSelection() {
    return gameOptions[Math.floor(Math.random() * 3)];
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} 

function playerSelection() {
    do {
        playerSelection = capitalize(prompt('Rock, Paper or Scissors?'));
    } while (gameOptions.indexOf(playerSelection) == -1);
    return playerSelection;
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection();
    computerSelection = computerSelection();

    console.log('Player Selection: ' + playerSelection);
    console.log('Computer Selection: ' + computerSelection);

    if (playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        console.log("Honors even. Draw!");
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
