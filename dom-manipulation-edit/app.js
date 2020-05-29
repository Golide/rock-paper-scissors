const gameOptions = ['rock', 'paper', 'scissors'];

let computerSelection;
let body;

let winScore = 0;
let tieScore = 0;
let loseScore = 0;

winScoreBoard = document.querySelector('#win-score');
tieScoreBoard = document.querySelector('#tie-score');
loseScoreBoard = document.querySelector('#lose-score');

function computerChoice() {
    return gameOptions[Math.floor(Math.random() * 3)];
}

body = document.querySelector('body');
const announcement = document.createElement('h5');

announcement.style.fontSize = '24px';
announcement.style.color = '#e62649';
announcement.style.textAlign = 'center';

const playerSelection_notification = document.createElement('h4');
playerSelection_notification.style.color = '#9d9cb8';
playerSelection_notification.style.textAlign = 'center';
playerSelection_notification.style.fontSize = '24px';

const computerChoice_notification = document.createElement('h4');
computerChoice_notification.style.color = '#9d9cb8';
computerChoice_notification.style.textAlign = 'center';
computerChoice_notification.style.fontSize = '24px';



function playRound(playerSelection, computerSelection){

    computerSelection = computerChoice();

    playerSelection_notification.textContent = (`Player Selection: ${playerSelection}`);
    body.appendChild(playerSelection_notification);

    computerChoice_notification.textContent = (`Computer Selection: ${computerSelection}`);
    body.appendChild(computerChoice_notification);

    if (playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'scissors') {
        announcement.textContent = (`Draw, You both went with ${playerSelection}!`);
        body.appendChild(announcement);
        tieScore++;
        tieScoreBoard.textContent = `${tieScore}`;
        return "Draw";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        announcement.textContent = ('You Win! Rock beats Scissors.');
        body.appendChild(announcement);
        winScoreBoard.textContent = `${winScore}`;
        winScore++;
        return "Win";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        announcement.textContent = ('You Win! Paper beats Rock.');
        body.appendChild(announcement);
        winScore++;
        winScoreBoard.textContent = `${winScore}`;
        return "Win";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        announcement.textContent = ('You Win! Scissors beats Paper.');
        body.appendChild(announcement);
        winScore++;
        winScoreBoard.textContent = `${winScore}`;
        return "Win";
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        announcement.textContent = ('You Lose! Rock beats Scissors.');
        body.appendChild(announcement);
        loseScore++;
        loseScoreBoard.textContent = `${loseScore}`;
        return "Lose";
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        announcement.textContent = ('You Lose! Paper beats Rock.');
        body.appendChild(announcement);
        loseScore++;
        loseScoreBoard.textContent = `${loseScore}`;
        return "Lose";
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        announcement.textContent = ('You Lose! Scissors beats Paper.');
        body.appendChild(announcement);
        loseScore++;
        loseScoreBoard.textContent = `${loseScore}`;
        return "Lose";
    }
}

let playerSelection = document.querySelectorAll('.playerSelection');

playerSelection.forEach((selection) => {
    selection.addEventListener(('click'), () => {
        playerSelection = selection.id;
        playRound(playerSelection, computerSelection);
    });
});

/*

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

*/
