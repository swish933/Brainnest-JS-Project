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
    } else {
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
}



function game() {
    let i = 0;
    let score = 0;
    let result = null;

    while (i < 5) {

        const computerSelection = computerPlay();
        const playerSelection = prompt(`Round ${i+1}: Enter your selection: Rock, Paper or Scissors`);
        while (playerSelection == null) {
         playerSelection = prompt(`Round ${i+1}: Enter your selection: Rock, Paper or Scissors`);
        }
        
        while (typeof (playerSelection) !== String) {
                 playerSelection = prompt(`Enter a valid selection: Rock, Paper or Scissors`);
        }

       while(playerSelection.toUpperCase() !== 'ROCK'|| playerSelection.toUpperCase() !== 'PAPER'|| playerSelection.toUpperCase() !== 'SCISSORS'){
                             playerSelection = prompt(`Enter a valid selection: Rock, Paper or Scissors`);

        }

        result = playRound(playerSelection, computerSelection);

        console.log(result.message);
        if (result.userWin) {
            score += 1;
        }
        if (result.message !== 'Draw') {
            i += 1;
        }
    }

    if (score < 3) {
       alert(`You lost to the computer 😢. Your score is ${score}`);
        return;
    }

   alert(`You beat the computer!!! 😎 . Your score is ${score}`);
}


game();