"use strict";

/* ########################################################################## */

let oddNumber = "";

// while (oddNumber % 2 === 0 || oddNumber > 50 || oddNumber < 1) {
//     oddNumber = prompt ("Pick an odd number between 1 and 50.");
// }

// While statement seems like a better option for this,
// but since the exercise asks for a break statement as well:

for (let i = 0; i < 20; i++) {
    if (oddNumber % 2 !== 0 && oddNumber <= 50 && oddNumber >= 1) {
        break;
    } else {
        oddNumber = prompt ("Pick an odd number between 1 and 50.");
    }
}

/* ########################################################################## */

console.log("Number to skip is: " + oddNumber);

for (let i = 1; i <= 50; i += 2) {
    if (i == oddNumber) {
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}

/* ########################################################################## */

