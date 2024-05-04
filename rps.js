"use strict";
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")

//Event listeners to monitor button press
document.addEventListener('DOMContentLoaded', () => {
    rockButton.addEventListener("click", rock);
    paperButton.addEventListener("click", paper);
    scissorsButton.addEventListener("click", scissors);
});

// functions for moves
function rock() {
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
};
function paper() {
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
};
function scissors() {
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
};

// Function that pseudo-randomly generates acomputer move
function computerPlay() {
    let choice = Math.floor(Math.random() * 3); /*random number between 0 and 2*/
    // assign rock, paper, or scissors depending on which number
    switch(choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break; 
    }
    document.getElementById("choice").innerHTML = choice; /*display computer move*/
    return choice;
}


// Function that checks winning conditions
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock" || 
        playerSelection == "paper" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "scissors") {
        tieWin();
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        playerWin();
    } 
    else if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        computerWin();
    }
}

// Functions for displaying results
function playerWin() {
    document.getElementById("result").innerHTML = "you win!";
}

function computerWin() {
    document.getElementById("result").innerHTML = "you lose!";
}

function tieWin() {
    document.getElementById("result").innerHTML = "tie!";
}