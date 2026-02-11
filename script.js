const validChoice = ["rock", "paper", "scissors"];
let resultIn = document.getElementById("gameResult");
let clickAction = document.querySelector("#buttonHuman");
clickAction.addEventListener('click', playGame);


function playGame(){
    let playRound = 5;
    let humanScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    const human = getHumanChoice;
    const computer = getComputerChoice;

    function getComputerChoice(){
        let randoming = Math.floor(Math.random() * validChoice.length) + 1;

        if (randoming === 1)
            return "rock";
        else if (randoming === 2)
            return "paper";
        else
            return "scissors";
    }

    function getHumanChoice(){
        const pick = prompt("Pick (Rock, Paper or Scissors): ");
        try{
            if (validChoice.includes(pick.toLowerCase())){
                return pick.toLowerCase();
            }
        } 
        catch(error){
            return;
        }
        
    }

    function playGround(human, computer){
        if (human == "rock"){
            if (computer === "paper"){
                console.log("Computer Wins!");
                computerScore++;
            }
            else if (computer === "scissors"){
                console.log("Player Wins!");
                humanScore++;
            }
            else{
                console.log("Draw!");
                drawScore++;
            }
        }
        else if (human === "paper"){
            if (computer === "rock"){
                console.log("Player Wins!");
                humanScore++;
            }
            else if (computer === "scissors"){
                console.log("Computer Wins!");
                computerScore++;
            }
            else{
                console.log("Draw!");
                drawScore++
            }
        }
        else{
            if (computer === "rock"){
                console.log("Computer Wins!");
                computerScore++;
            }
            else if (computer === "paper"){
                console.log("Player Wins!");
                humanScore++;
            }
            else{
                console.log("Draw!");
                drawScore++
            }
        }
    }

for(let i = 1; i <= playRound; i++){
        const a = getHumanChoice();
        const b = getComputerChoice();
        playGround(a, b);
    }
    resultIn.innerHTML = `Scores: Player: ${humanScore} | Computer: ${computerScore} | Draw: ${drawScore}`;gi
}