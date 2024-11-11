let userInput = document.querySelectorAll("button");
let result = document.getElementById("result");
let computer = document.getElementById("computer-choice");
let user = document.getElementById("user-choice");
let computerChoice;
let userChoice;

userInput.forEach(eliment =>(eliment.addEventListener("click",() =>{
    userChoice = eliment.id;
    user.innerText = userChoice;
    console.log("you are entered!");
    getComputerChoice();
    getResult();

})));

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice === 1){
        computerChoice = "rock";
    }
    else if(choice === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    computer.innerText = computerChoice;
}
function getResult() {
    if(computerChoice === userChoice){
        result.innerText = "It's a draw";
    }
    else if(computerChoice === "rock" && userChoice === "paper"){
        result.innerText = "You win!";
    }
    else if(computerChoice === "rock" && userChoice === "scissors"){
        result.innerText = "You lose!";
    }
    else if(computerChoice === "paper" && userChoice === "scissors"){
        result.innerText = "You win!";
    }
    else if(computerChoice === "paper" && userChoice === "rock"){
        result.innerText = "You lose!";
    }
    else if(computerChoice === "scissors" && userChoice === "rock"){
        result.innerText = "You win!";
    }
    else if(computerChoice === "scissors" && userChoice === "paper"){
        result.innerText = "You lose!";
    }
} 