"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});

let input = "";

function cheatCode(input) {
    if (input === "3838404037393739666513") {
        alert("You Win!");
    }
}

$(document).keyup(function(event) {
    input += event.keyCode;
    console.log(input)
    cheatCode(input);
});