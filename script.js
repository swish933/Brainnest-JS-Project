const hand = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let random = Math.floor(Math.random() * 3)
    return hand[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection == 'ROCK') {
        switch (computerSelection) {
            case `ROCK`:
                return {
                    message: 'Draw',
                    userWin: false
                };
            case `PAPER`:
                return {
                    message: `You Lose! ${computerSelection} beats ${playerSelection}`, userWin: false
                };
            case `SCISSORS`:
                return {
                    message: `You Win! ${playerSelection} beats ${computerSelection}`, userWin: true
                };
        }
    } else if (playerSelection == 'PAPER') {
        switch (computerSelection) {
            case `ROCK`:
                return {
                    message: `You Win! ${playerSelection} beats ${computerSelection}`, userWin: true
                };
            case `PAPER`:
                return {
                    message: 'Draw',
                    userWin: false
                };
            case `SCISSORS`:
                return {
                    message: `You Lose! ${computerSelection} beats ${playerSelection}`, userWin: false
                };
        }
    } else if (playerSelection == 'SCISSORS') {
        switch (computerSelection) {
            case `ROCK`:
                return {
                    message: `You Lose! ${computerSelection} beats ${playerSelection}`,
                    userWin: false
                };
            case `PAPER`:
                return {
                    message: `You Win! ${playerSelection} beats ${computerSelection}`, userWin: true
                };
            case `SCISSORS`:
                return {
                    message: 'Draw',
                    userWin: false
                };
        }
    }
    else {
        return {
            message: "Invalid Input",
            userWin: false
        };
    }
}



function game() {
    let round = 0;
    let score = 0;
    let result = null;

    while (round < 5) {

        const computerSelection = computerPlay();
        let playerSelection = prompt(`Round ${round + 1}: Enter your selection: Rock, Paper or Scissors`);

        while (playerSelection == '') {
            playerSelection = prompt(`Round ${round + 1}: Enter a valid selection: Rock, Paper or Scissors`);
        }

        result = playRound(playerSelection, computerSelection);

        console.log(result.message);

        if (result.userWin) {
            score += 1;
        }

        if(result.message == 'Invalid Input'){
            continue;
        }

        if (result.message !== 'Draw' || result.message !== 'Invalid Input') {
            round += 1;
        }

    }

    if (score < 3) {
        console.log(`You lost to the computer 😢. Your score is ${score}`);
        alert(`You lost to the computer 😢. Your score is ${score}`);
        return;
    }

    console.log(`You beat the computer!!! 😎 . Your score is ${score}`);
    alert(`You beat the computer!!! 😎 . Your score is ${score}`);
}


game();