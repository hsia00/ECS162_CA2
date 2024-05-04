"use strict";
let sides;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("button").addEventListener("click", click);
});

// function to roll the dice and display the result
function click() { 
    sides = document.getElementById("sides").value;
    /*check if input is valid*/
    if(sides < 1 || sides > 100){
        document.getElementById("result").innerText = "invalid input! please enter a number between 1 and 100";
    }
    else{
        let x = Math.floor(Math.random() * sides) + 1;; /*random number between 1 and 6*/
        document.getElementById("result").innerText = x;
    }
}