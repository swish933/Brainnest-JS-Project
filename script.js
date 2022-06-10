const hand = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;
let round = 1;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const output = document.querySelector('.output');
const score = document.querySelector('.score');
const playAgain = document.querySelector('.playAgain');
const retry = document.querySelector('.retry');



function computerPlay() {
    let random = Math.floor(Math.random() * 3)
    return hand[random];
}

function incrementRound() {
    round++;
}

function incrementComputerScore() {
    ++computerScore;
}

function incrementUserScore() {
    ++userScore;
}

function displayScore() {
    score.textContent = userScore;
}

function displayRetry() {
    playAgain.style.display = 'flex';
}

function scoreCheck() {
    
    let resultString = `You ${userScore === 5 ? 'beat' : 'lost to'} the computer!!! ${userScore === 5 ? "😎" : "😢"}.`;
    output.textContent = resultString;
    displayRetry();
}

function playRound(playerSelection) {
    let computerSelection = computerPlay().toUpperCase();
    playerSelection = playerSelection.toUpperCase();

        if (playerSelection == 'ROCK') {
            switch (computerSelection) {
                case `ROCK`:
                    output.textContent = `Round: Draw`;
                    break;
                case `PAPER`:
                    incrementComputerScore();
                    if(userScore===5||computerScore===5)
                    {
                        scoreCheck();
                        return;
                    }
                    output.textContent = `You lost that round! ${computerSelection} beats ${playerSelection}`;
                    incrementRound();
                    break;
                case `SCISSORS`:
                    incrementUserScore();
                    displayScore();
                    if(userScore===5||computerScore===5)
                    {
                        scoreCheck();
                        return;
                    }
                    output.textContent = `You won that round! ${playerSelection} beats ${computerSelection}`;
                    incrementRound();
                    break;
            }
        } else if (playerSelection == 'PAPER') {
            switch (computerSelection) {
                case `ROCK`:
                    incrementUserScore();
                    displayScore();
                    if(userScore===5||computerScore===5)
                    {
                        scoreCheck();
                        return;
                    };
                    output.textContent = `You won that round! ${playerSelection} beats ${computerSelection}`;
                    incrementRound();
                    break;
                case `PAPER`:
                    output.textContent = `Round: Draw`;
                    break;
                case `SCISSORS`:
                    incrementComputerScore();
                    if(userScore===5||computerScore===5)
                    {
                        scoreCheck();
                        return;
                    }
                    output.textContent = `You lost that round! ${computerSelection} beats ${playerSelection}`;
                    incrementRound();
                    break;

            }
        } else if (playerSelection == 'SCISSORS') {
            switch (computerSelection) {
                case `ROCK`:
                    incrementComputerScore();
                    if(userScore===5||computerScore===5)
                    {
                        scoreCheck();
                        return;
                    }
                    output.textContent = `You lost that round! ${computerSelection} beats ${playerSelection}`;
                    incrementRound();
                    break;
                case `PAPER`:
                    incrementUserScore();
                    displayScore();
                    if(userScore===5||computerScore===5)
                    {
                        scoreCheck();
                        return;
                    }
                    output.textContent = `You won that round! ${playerSelection} beats ${computerSelection}`;
                    incrementRound();
                    break;
                case `SCISSORS`:
                    output.textContent = `Round: Draw`;
                    break;
            }
        }
        else {
            output.textContent = 'Please enter a valid input';
        }

};

rock.addEventListener('click', (e) => {
    playRound(e.target.value)
});

paper.addEventListener('click', (e) => {
    playRound(e.target.value)
});

scissors.addEventListener('click', (e) => {
    playRound(e.target.value)
});

retry.addEventListener('click', e => {
    window.location.reload();
})