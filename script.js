let resultIn = document.getElementById("gameResult");
let clickAction = document.querySelector("#buttonHuman");
const computer = getComputerChoice;
const human = getHumanChoice;

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

let pickingResult = document.querySelectorAll('#selectedPick');
pickingResult.forEach((button) => {
    button.addEventListener('click', (e) => {
        let counter = 0;
        let baseHuman = document.querySelector('.pickBase');
        let holder = e.target.id.toLowerCase().trim();

        // holder
        switch (holder) {
            case 'rock':
                getHumanChoice(e.target.id)
                baseHuman.style.backgroundImage = 'url(./images/rock.png)';
                counter++;
                break;
            case 'paper':
                getHumanChoice(e.target.id)
                baseHuman.style.backgroundImage = 'url(./images/paper.png)';
                counter++;
                break;
            case 'scissors':
                getHumanChoice(e.target.id)
                baseHuman.style.backgroundImage = 'url(./images/scissor.png)';
                counter++;
                break;
        }
    });
});

function getHumanChoice(action) {
    return playGround(action, getComputerChoice());
}

// Computer Choice
function getComputerChoice() {
    const validChoice = ["rock", "paper", "scissors"];
    let baseComputer = document.querySelector('.pickBaseComputer');
    let randoming = Math.floor(Math.random() * validChoice.length) + 1;

    if (randoming === 1) {
        baseComputer.style.backgroundImage = 'url(./images/rock.png)';
        //background = rock
        return "rock";
    }
    else if (randoming === 2) {
        baseComputer.style.backgroundImage = 'url(./images/paper.png)';
        //background = paper
        return "paper";
    }
    else {
        baseComputer.style.backgroundImage = 'url(./images/scissor.png)';
        //background = scissors
        return "scissors";
    }
}

function playGround(human, computer) {
    if (human == "rock") {
        if (computer === "paper") {
            console.log("Computer Wins!");
            computerScore++;
        }
        else if (computer === "scissors") {
            console.log("Player Wins!");
            playerScore++;
        }
        else if (computer === "rock") {
            console.log("Draw!");
            drawScore++;
        }
    }
    else if (human === "paper") {
        if (computer === "rock") {
            console.log("Player Wins!");
            playerScore++;
        }
        else if (computer === "scissors") {
            console.log("Computer Wins!");
            computerScore++;
        }
        else {
            console.log("Draw!");
            drawScore++
        }
    }
    else {
        if (computer === "rock") {
            console.log("Computer Wins!");
            computerScore++;
        }
        else if (computer === "paper") {
            console.log("Player Wins!");
            playerScore++;
        }
        else {
            console.log("Draw!");
            drawScore++;
        }
    }
    let showPlayerScore = document.querySelector('#playerScore');
    let showComputerScore = document.querySelector('#computerScore');

    showPlayerScore.textContent = playerScore;
    showComputerScore.textContent = computerScore;
    let announce = document.querySelector('#announceWin');
    if (playerScore + computerScore === 5) {
        if (playerScore < computerScore) {
            announce.textContent = 'Computer Wins!';
            return;
        }
        else {
            announce.textContent = 'Player Wins!';
            return;
        }
    }
    else {
        announce.textContent = 'VS';
    }
};
