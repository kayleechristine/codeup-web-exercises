"use strict";

/* ########################################################################## */

let number = 1;
while (number < 33000) {
    number *= 2;
    console.log(number);
}

/* ########################################################################## */

let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let buyCones = Math.floor(Math.random() * 5) + 1;
    if (buyCones <= allCones) {
        console.log("Selling " + buyCones + " cones....");
        allCones -= buyCones;
    } else if (buyCones > allCones) {
        console.log("I'm sorry, I don't have  " + buyCones + " cones.");
    }
} while (allCones > 0);

console.log("I've sold all the cones!");

/* ########################################################################## */

