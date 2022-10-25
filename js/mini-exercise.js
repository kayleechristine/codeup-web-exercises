// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.

// function returnFive() {
//     return 5;
// }

// Note: ask about how to do this as an arrow function

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
//
// function isFive(x) {
//     return x == 5;
// }

// how many inputs should the function have?
    // one input
// what are the data types for the inputs?
    // inputs can be a number or string and the function will still work
// what is the data type of the output/return value?
    // boolean


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

// function isShortWord(x) {
//     return x.length < 5;
// }

// how many inputs?
    // one input
// what data type for inputs?
    // string
// what is the return type?
    // boolean


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
//
// function isSameLength(x, y) {
//     return x.length === y.length;
// }

// How many inputs?
    // two
// What type of input?
    // strings
// What type of output?
    // boolean

// complete

// Write a function named "inBetween" that accepts three inputs: min, max, num, and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.
//
// EX:
// inBetween(1, 10, 5) returns true
// inBetween(25, 26, 25) returns false
// inBetween(0, 1, 0.5) returns true

// const inBetween = (min, max, num) => (min < num) && (num < max);

// console.log(inBetween(1, 4, 3));
// console.log(inBetween(1, 4, 6));

// Create a variable called num that is equal to 0. Write a while loop that increments "num" by 5 so long as num is less than 100.

// let num = 0;
// while (num < 100) {
//     console.log(num);
//     num += 5;
// }

// Create a function named "typePrinter" that accepts an array as an input, and logs the data type of each element to the console.

// function typePrinter(array) {
//     return array.map(element => typeof(element));
// }
//
// console.log(typePrinter([true, "Icon", 25, "66", false, 0]));

/* Create a function named "average" that takes in an array of numeric values, and returns the average. If any of the
* elements in the array are non-numeric, the function should return false. */

const isNumeric = (num) => !isNaN(parseFloat(num));

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (isNumeric(array[i])) {
            sum += Number(array[i]);
        } else {
            return false;
        }
    }
    return sum / array.length;
}

//     Ex:
// console.log(average(["6", 5, 3, 2, 9]) )                      // returns 5
// console.log(average([true, 6, 9, 3, 10]))                   // returns false
// console.log(average(["Codey the Duck", 10, 3, false])) // returns false
// console.log(average([1, 2, 3, 4, 5]))                        // returns 3
// console.log(average(["5.5", "five", 3, 6, 7]))                // returns false

// Create a function named "filterNegativity" that accepts an array of numbers, and returns an array with only positive numbers.
//
//     Ex: filterNegativity([5, -6, 2, 0, -5, -13]) // returns [5, 2, 0,]

function filterNegativity(array) {
    let positive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positive.push(array[i]);
        }
    }
    return positive;
}

console.log(filterNegativity([1, 2, 3, -4]));
console.log(filterNegativity([1, -2, 3, 4]));