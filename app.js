const gameOptions = ['Rock', 'Paper', 'Scissors'];

computerSelection = (function computerSelection() {
    return gameOptions[Math.floor(Math.random() * 3)];
})();

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} 

playerSelection = (function playerSelection() {
    return capitalize(prompt('Rock, Paper or Scissors?'));
})();

function playRound(playerSelection, computerSelection){

    switch (playerSelection + computerSelection) {
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            console.log('Draw!');
            break;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            console.log('You lose!');
            break;

        case 'ScissorsPaper':
        case 'PaperRock':
        case 'RockScissors':
            console.log('You win!');
            break;

        default:
            console.log('You entered an invalid choice. Refresh and try again.');
    }

}

console.log('Player Selection: ' + playerSelection);
console.log('Computer Selection: ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));
