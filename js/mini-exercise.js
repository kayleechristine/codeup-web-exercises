// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.

function returnFive() {
    return 5;
}

// Note: ask about how to do this as an arrow function

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.

function isFive(x) {
    return x == 5;
}

// how many inputs should the function have?
    // one input
// what are the data types for the inputs?
    // inputs can be a number or string and the function will still work
// what is the data type of the output/return value?
    // boolean


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

function isShortWord(x) {
    return x.length < 5;
}

// how many inputs?
    // one input
// what data type for inputs?
    // string
// what is the return type?
    // boolean


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

function isSameLength(x, y) {
    return x.length === y.length;
}

// How many inputs?
    // two
// What type of input?
    // strings
// What type of output?
    // boolean