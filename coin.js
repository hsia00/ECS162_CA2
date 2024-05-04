"use strict";
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("button").addEventListener("click", click);
});

let heads = 0;
let tails = 0;

//function to flip the coin and display the result
function click() { 
    let x = Math.random(); /*random number between 0 and 1*/
    if(x >= 0.5){
    	document.getElementById("result").innerText = "heads!";
    }
    else{
        document.getElementById("result").innerText = "tails!";
    }
}