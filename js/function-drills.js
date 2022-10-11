// Function Drills
// Functions using conditionals but not loops or arrays:

// Make a function named isOdd(number)
const isOdd = (number) => number % 2 !== 0;
// console.log(isOdd(4));
// console.log(isOdd(5));

// Make a function named isEven(number)
const isEven = (number) => number % 2 === 0;
// console.log(isEven(4));
// console.log(isEven(5));

// Make a function named identity(input) that returns the input exactly as provided.
const identity = (input) => input;
// console.log(identity("blah"));

// Make a function named isFive(input)
const isFive = (input) => input === 5;
// console.log(isFive(2));
// console.log(isFive(5));

// Make a function named addFive(input) that adds five to some input.
const addFive = (input) => input + 5;
// console.log(addFive(1));
// console.log(addFive(5));

// Make a function named isMultipleOfFive(input)
const isMultipleOfFive = (input) => input % 5 === 0;
// console.log(isMultipleOfFive(20));
// console.log(isMultipleOfFive(13));

// Make a function named isThree(input)
const isThree = (input) => input === 3;
// console.log(isThree(0));
// console.log(isThree(3));

// Make a function named isMultipleOfThree(input)
const isMultipleOfThree = (input) => input % 3 === 0;
// console.log(isMultipleOfThree(9));
// console.log(isMultipleOfThree(22));

// Make a function named isMultipleOfThreeAndFive(input)
const isMultipleOfThreeAndFive = (input) => isMultipleOfThree(input) && isMultipleOfFive(input);
// console.log(isMultipleOfThreeAndFive(7));
// console.log(isMultipleOfThreeAndFive(10));
// console.log(isMultipleOfThreeAndFive(15));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
const isMultipleOf = (target, n) => target % n === 0;
// console.log(isMultipleOf(10, 5));
// console.log(isMultipleOf(9, 2));

// Make a function named isTrue(boolean)
const isTrue = (boolean) => boolean === true;
// console.log(isTrue(true));
// console.log(isTrue(false));
// console.log(isTrue("penguins"));

// Make a function named isFalse(boolean)
const isFalse = (boolean) => boolean === false;
// console.log(isFalse(0));
// console.log(isFalse(false));
// console.log(isFalse("dolphins"));

// Make a function named isTruthy(input), remember that values other than true will behave like true
const isTruthy = (input) => input !== false;
// console.log(isTruthy(1));
// console.log(isTruthy(true));
// console.log(isTruthy("false"));
// console.log(isTruthy(false));

// Make a function named isFalsy(input), remember that values other than false behave like false
const isFalsy = (input) => input == false;
// console.log(isFalsy("false"));
// console.log(isFalsy(0));
// console.log(isFalsy(""));
// console.log(isFalsy(false));

// Make a function named isVowel(letter)
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const isVowel = (letter) => vowel.includes(letter);
// console.log(isVowel("a"));
// console.log(isVowel("x"));
// console.log(isVowel("E"));

// Make a function named isConsonant(letter)
const isConsonant = (letter) => (vowel.includes(letter) !== true) && (typeof(letter) === "string");
// console.log(isConsonant("q"));
// console.log(isConsonant("i"));
// console.log(isConsonant(7));

// Make a function named isCapital(letter)
const isCapital = (letter) => letter === letter.toUpperCase();
// console.log(isCapital("a"));
// console.log(isCapital("A"));
// console.log(isCapital("D"));

// Make a function named isLowerCase(letter)
const isLowerCase = (letter) => letter === letter.toLowerCase();
// console.log(isCapital("a"));
// console.log(isCapital("A"));
// console.log(isCapital("D"));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
const hasLowerCase = (string) => string !== string.toUpperCase();
// console.log(hasLowerCase("aeiou"));
// console.log(hasLowerCase("AEIOU"));
// console.log(hasLowerCase("aEiOu"));

// Make a function named isSpace(letter) that returns if a character is a space character
const isSpace = (letter) => letter === " ";
// console.log(isSpace(" "));
// console.log(isSpace("Q"));

// Make a function named isZero(number)
const isZero = (number) => number === 0;
// console.log(isZero(0));
// console.log(isZero(10));
// console.log(isZero("yellow"));

// Make a function named notZero(input) that returns true if the input is not zero
const notZero = (input) => input !== 0;
// console.log(notZero(0));
// console.log(notZero(12));
// console.log(notZero("orange"));

// Write a function named lowerCase(string)
const lowerCase = (string) => string.toLowerCase();
// console.log(lowerCase("HELLO"));
// console.log(lowerCase("HoWdY"));
// console.log(lowerCase("hi"));

// Write a function named double(n) that returns a number times two
const double = (n) => n * 2;
// console.log(double(1));
// console.log(double(2));
// console.log(double(3));

// Write a function named triple(n) that returns a number times 3
const triple = (n) => n * 3;
// console.log(triple(1));
// console.log(triple(2));
// console.log(triple(3));

// Write a function named quadruple(n) that returns a number times 4
const quadruple = (n) => n * 4;
// console.log(quadruple(1));
// console.log(quadruple(2));
// console.log(quadruple(3));

// Write a function named half(n) that returns 1/2 of the provided input
const half = (n) => n / 2;
// console.log(half(1));
// console.log(half(2));
// console.log(half(3));

// Write a function named subtract(a, b) that returns a minus b
const subtract = (a, b) => a - b;
// console.log(subtract(1, 1));
// console.log(subtract(2, 3));
// console.log(subtract(4, 2));

// Write a function named multiply(a, b) that returns the product of a times b
const multiply = (a, b) => a * b;
// console.log(multiply(1, 100));
// console.log(multiply(2, 2));
// console.log(multiply(3, 2.5));

// Write a function named divide(a, b) that returns a divided by b
const divide = (a, b) => a / b;
// console.log(divide(12, 2));
// console.log(divide(25, 5));
// console.log(divide(15, 5));

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
const remainder = (a, b) => a % b;
// console.log(remainder(25, 5));
// console.log(remainder(32, 10));
// console.log(remainder(100, 3));

// Write a function named cube(n) that returns n * n * n
const cube = (n) => n * n * n;
// console.log(cube(1));
// console.log(cube(2));
// console.log(cube(3));

// Write a function named squareRoot(n) that returns the square root of the input
const squareRoot = (n) => Math.sqrt(n);
// console.log(squareRoot(25));
// console.log(squareRoot(36));
// console.log(squareRoot(49));

// Write a function named cubeRoot(n) that returns the cube root of the input
const cubeRoot = (n) => Math.cbrt(n);
// console.log(cubeRoot(1));
// console.log(cubeRoot(27));
// console.log(cubeRoot(125));

// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.

function invertSign(number) {
    if (number === Math.abs(number)) {
        return number + " is positive";
    } else if (typeof(number) !== "number") {
        return false;
    } else {
        return number + " is negative";
    }
}

// console.log(invertSign(1));
// console.log(invertSign(-2));
// console.log(invertSign("potato"));

// Write a function named degreesToRadians(number)

function degreesToRadians(degrees) {
    return (degrees * 0.017453).toFixed(5);
}

// console.log(degreesToRadians(360));
// console.log(degreesToRadians(180));
// console.log(degreesToRadians(90));

// Write a function named radiansToDegrees(number)

function radiansToDegrees(radians) {
    return (radians / 0.017453).toFixed(0);
}

// console.log(radiansToDegrees(6.283185));
// console.log(radiansToDegrees(3.141593));
// console.log(radiansToDegrees(1.570796));

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.

function isBlank(char) {
    if (Number(char) === 0 && char.includes("0") !== true) {
        return "This is a blank character";
    } else {
        return "This is not a blank character";
    }
}

// console.log(isBlank("   "));
// console.log(isBlank("   "));
// console.log(isBlank("Q"));
// console.log(isBlank("0"));
// console.log(isBlank("000"));

//     Make a function named trim(string) that removes empty spaces before and after the input.

const trim = (string) => string.trim();

// console.log(trim("      hello       "));
// console.log(trim("         hi"));
// console.log(trim("hey      "));
// console.log(trim("howdy"));

//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value

const areEqual = (input1, input2) => input1 == input2;

// console.log(areEqual("hello", "howdy"));
// console.log(areEqual(2, "2"));
// console.log(areEqual(3, "three"));

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.

const areIdentical = (input1, input2) => input1 === input2;

// console.log(areIdentical(2, "two"));
// console.log(areIdentical(2, "2"));
// console.log(areIdentical(2, 2));

//     Make a function named not(input) returns the input with a flipped boolean

const not = (input) => !input;

// console.log(not(true));
// console.log(not(false));
// console.log(not(1));
// console.log(not(0));

// Make a function named notNot(input) that the negation of the negation of the input.

const notNot = (input) => !!input;

// console.log(notNot(true));
// console.log(notNot(false));
// console.log(notNot(1));
// console.log(notNot(0));

//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND

const and = (predicate1, predicate2) => predicate1 && predicate2;

// console.log(and(true, true));
// console.log(and(true, false));
// console.log(and(false, true));
// console.log(and(false, false));

// Make a function named or(predicate1, predicate2) that returns the logical operation of OR

const or = (predicate1, predicate2) => predicate1 || predicate2;

// console.log(or(true, true));
// console.log(or(true, false));
// console.log(or(false, true));
// console.log(or(false, false));

// Write a function called reverseString(string) that reverses a string

function reverseString(string) {
    return string.split("").reverse().join("");
}

// console.log(reverseString("hello"));
// console.log(reverseString("abcd"));
// console.log(reverseString("racecar"));
// console.log(reverseString("kayak"));

// Make a function named absoluteValue(number) that returns the absolute value of a number.

const absoluteValue = (number) => Math.abs(number);

// console.log(absoluteValue(12));
// console.log(absoluteValue(-6));
// console.log(absoluteValue(-12));

//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

const rollDice = (sides) => Math.ceil(Math.random() * sides);

// console.log(rollDice(6));
// console.log(rollDice(12));
// console.log(rollDice(20));

//     Simple Function Drills
// Make a function called returnTwo() that returns the number 2 when called

const returnTwo = (number) => 2;

// Test this function with console.log(returnTwo())
//
// console.log(returnTwo(7));
// console.log(returnTwo(-2));
// console.log(returnTwo("potato"));

//     Make a function called sayHowdy() which console.logs the string “Howdy!”

const sayHowdy = (input) => console.log("Howdy!");
//
// Test this function by directly calling sayHowdy()
//
// console.log(sayHowdy("Hello"));
// console.log(sayHowdy("potato"));
// console.log(sayHowdy());


// Remember this function does not need a defined return value
//
// Make a function called returnName() that returns the string of your name
//
const returnName = (name) => console.log(name);

// Test this function with console.log(returnName())
//
// console.log(returnName("Kaylee"));
// console.log(returnName("Joshua"));
// console.log(returnName("Julia"));

//     Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
//
const addThree = (number) => Number(number) + 3;

// console.log(addThree(-3));
// console.log(addThree(0));
// console.log(addThree(5));
// console.log(addThree("potato"));

//     Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
//
const sayString = (input) => input;

// console.log(sayString("codeup"));
// console.log(sayString("CodeUp"));
// console.log(sayString("CODEUP"));

//     Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
//
// const identity = (input) => input;

// console.log(identity("Kaylee"));
// console.log(identity("was"));
// console.log(identity("here"));
// console.log(identity(":)"));

//     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.

const getRandomNumber = (min, max) => Math.ceil(Math.random() * (max - min) + min);

// console.log(getRandomNumber(5, 10));
// console.log(getRandomNumber(10, 20));
// console.log(getRandomNumber(50, 100));

//
// Write a function called first(input) that returns the first character in the provided string.

const first = (input) => input.substring(0, 1);

// console.log(first("Hello"));
// console.log(first("Joshua"));
// console.log(first("Kaylee"));
//
//     Write a function called last(input) that returns the last character of a string
//

const last = (input) => input.substring(input.length - 1, input.length);

// console.log(last("Hello"));
// console.log(last("Joshua"));
// console.log(last("Kaylee"));
//
// Write a function called rest(input) that returns everything but the first character of a string.
//
const rest = (input) => input.substring(1, input.length);
//
// console.log(rest("Hello"));
// console.log(rest("Joshua"));
// console.log(rest("Kaylee"));

//     Write a function called reverse(input) that takes a string and returns it reversed.
//
const reverse = (input) => input.split('').reverse().join('');

// console.log(reverse("Hello"));
// console.log(reverse("Joshua"));
// console.log(reverse("Kaylee"));

//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//
const isNumeric = (input) => typeof(input) === "number";

// console.log(isNumeric(4));
// console.log(isNumeric(Infinity));
// console.log(isNumeric("potato"));

//     Write a function called count(input) that takes in a string and returns the number of characters.
//
//     Write a function called add(a, b) that returns the sum of a and b
//
// Write a function called subtract(a, b) that return the difference between the two inputs.
//
//     Write multiply(a, b) function that returns the product
//
// Write a divide(numerator, denominator) function that returns a divided by b
//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
//
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
//
// Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
//
//     Create a function that takes in two string inputs.
//
//     If the second string input is present in the first, return the first input string with the second input string removed from it.
//     If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
//     If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
//
// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
//
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiement passing in different functions.
//     Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.