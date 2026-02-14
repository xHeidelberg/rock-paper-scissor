let resultIn = document.getElementById("gameResult");
let clickAction = document.querySelector("#buttonHuman");

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let maxRound = 5;// Pwedeng input


let pickingResult = document.querySelectorAll('#selectedPick');
pickingResult.forEach((button) => {
    button.addEventListener('click', (e) => {
        let baseHuman = document.querySelector('.pickBase');
        let holder = e.target.id.toLowerCase().trim();

        switch (holder) {
            case 'rock':
                whatSelected(e.target.id)
                baseHuman.style.backgroundImage = 'url(./images/rock.png)';
                break;
            case 'paper':
                whatSelected(e.target.id)
                baseHuman.style.backgroundImage = 'url(./images/paper.png)';
                break;
            case 'scissor':
                whatSelected(e.target.id)
                baseHuman.style.backgroundImage = 'url(./images/scissor.png)';
                break;
        }
    });
}
);

function whatSelected(id) {
    let para = document.querySelector('#resultHere p')
    let divResult = document.querySelector('#resultHere');
    let spanner = document.createElement('span');

    spanner.textContent = `Result: ${id}`;
    if (para) {
        para.textContent = '';
        para.appendChild(spanner);
    }
    else {
        let newPara = document.createElement('p')
        newPara.appendChild(spanner);
        divResult.appendChild(spanner);
    }
};


//clickAction.addEventListener('click', playGame);
function playGame() {
    const human = getHumanChoice;
    const computer = getComputerChoice;

    function getComputerChoice() {
        const validChoice = ["rock", "paper", "scissors"];
        let randoming = Math.floor(Math.random() * validChoice.length) + 1;

        if (randoming === 1)
            //background = rock
            return "rock";
        else if (randoming === 2)
            //background = paper
            return "paper";
        else
            //background = scissors
            return "scissor";
    }
    /*
       function getHumanChoice() {
           const pick = prompt("Pick (Rock, Paper or Scissors): ");
           try {
               if (validChoice.includes(pick.toLowerCase())) {
                   return pick.toLowerCase();
               }
           }
           catch (error) {
               return;
           }
   
       }
    */
    function playGround(human, computer) {
        if (human == "rock") {
            if (computer === "paper") {
                console.log("Computer Wins!");
                computerScore++;
            }
            else if (computer === "scissors") {
                console.log("Player Wins!");
                humanScore++;
            }
            else {
                console.log("Draw!");
                drawScore++;
            }
        }
        else if (human === "paper") {
            if (computer === "rock") {
                console.log("Player Wins!");
                humanScore++;
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
                humanScore++;
            }
            else {
                console.log("Draw!");
                drawScore++
            }
        }
    }

    for (let i = 1; i <= playRound; i++) {
        const a = getHumanChoice();
        const b = getComputerChoice();
        playGround(a, b);
    }
    resultIn.innerHTML = `Scores: Player: ${humanScore} | Computer: ${computerScore} | Draw: ${drawScore}`; gi
}