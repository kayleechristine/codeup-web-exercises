"use strict";

/* ########################################################################## */

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

// console.log(showMultiplicationTable(2));
//     console.log("complete");
// console.log(showMultiplicationTable(5));
//     console.log("complete");
console.log(showMultiplicationTable(7));
//     console.log("complete");

function randomNumber() {
    for (let i = 0; i < 10; i++) {
        let randoNum = Math.floor(Math.random() * (200 - 20) + 20);
        console.log(randoNum % 2 === 0 ? randoNum + " is even" : randoNum + " is odd");
    }
}

console.log(randomNumber());

// let number = "";
// function pyramid() {
//     for (let i = 1; i <= 9; i++) {
//         number = i;
//         let string = number.toString();
//         for (let j = 2; j <= i; j++) {
//             string += number;
//         }
//         console.log(string);
//         }
//
//     }

// function pyramid() {
//     for (let i = 1; i <= 9; i++) {
//         let number = "";
//         for (let j = 1; j <= i; j++) {
//             // number += i;
//             number = number + i;
//         }
//         console.log(number);
//     }
// }

function pyramid() {
    for (let i = 1; i <= 9; i++) {
        console.log(i.toString().repeat(i));
    }
}

console.log(pyramid());

function minusFive() {
    for (let i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
}

console.log(minusFive());

//