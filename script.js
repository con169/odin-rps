let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let compChoice = Math.random();
    if (compChoice < 0.33)
        return "rock";
    else if (compChoice >= .33 && compChoice < .66)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice()
{
    let hChoice = prompt("Choose Rock, Paper, or Scissors");
    hChoice = hChoice.toLowerCase();
    return hChoice;
}


function playRound(hC, cC)
{
    if(hC == "rock")
        switch (cC)
        {
            case "paper":
            {
                console.log("You lose! Paper beats Rock");
                ++computerScore;
                break;
            }
            case "scissors":
            {
                console.log("You win! Rock beats Scissors");
                ++humanScore;
                break;
            }
            default:
                console.log("Tie!")
                break;
    
        }
    else if (hC == "paper")
        switch (cC)
        {
            case "scissors":
            {
                console.log("You lose! Scissors beats Rock");
                ++computerScore;
                break;
            }
            case "rock":
            {
                console.log("You win! Paper beats Rock");
                ++humanScore;
                break;
            }
            default:
                console.log("Tie!")
                break;
        }
    else if (hC == "scissors")
        switch(cC)
        {
            case "rock":
            {
                console.log("You lose! Rock beats Scissors");
                ++computerScore;
                break;
            }
            case "paper":
            {
                console.log("You win! Scissors beats Paper");
                ++humanScore;
                break;
            }
            default:
                console.log("Tie!")
                break;
        }
    else
        console.log("Invalid Choice");

}

function playGame()
{
    for(let i = 0; i < 5; ++i)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }

}
// console.log(getHumanChoice());
// console.log(getComputerChoice());
playGame();
console.log("Results:")
console.log("Human: " + humanScore);
console.log("Computer: " + computerScore);
