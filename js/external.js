console.log("Hello from external JavaScript!");
alert("Welcome to my website!");
var userFavColor = prompt('What\'s your favorite color?');
alert("Nice, " + userFavColor.toLowerCase() + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

alert("Welcome to Hollywood Video! How long would you like to rent each of these movies? The rate for each will be $3.00/day.");
var littleMermaid = prompt("The Little Mermaid");
var brotherBear = prompt("Brother Bear");
var hercules = prompt("Hercules");
var subtotal = (3*littleMermaid + 3*brotherBear + 3*hercules);
alert("Your subtotal will be $" + subtotal + ".");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

alert("It's almost payday! How many hours did you put in this week?");
var google = prompt("Hours at Google:");
var amazon = prompt("Hours at Amazon:");
var facebook = prompt("Hours at Facebook:");
var payday = (400*google + 380*amazon + 350*facebook);
alert("Chaching! You paycheck this week is $" + payday + "!");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

alert("Time to schedule your classes for the next semester. Let's see if we can sign you up for JavaScript 101 this time...");
var scheduleWorks = confirm("This class is only on Thursdays, does that work for you?");
if (scheduleWorks === true) {
    var classAvailability = confirm("Great! Does the online sign-up have a spot available?");
    if (classAvailability === true) {
        alert("Perfect, I'll get you signed up right away.");
    } else {
        alert("Dang, I guess you'll have to take the class next semester.");
    }
} else {
        alert("Dang, I guess you'll have to take the class next semester.");
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

alert("Welcome to Good Burger, home of the Good Burger. Is that a Good Savings coupon I see? Let's see if we can get you a Good Discount!");
var numberBurgers = prompt("How many Good Burgers would you like to order?");
var goodSavings = confirm("Are you a part of our Good Savings program?");
if (numberBurgers > 2 || goodSavings === true) {
    alert("We'll get those started for you right away");
    let couponValid = confirm("And let's check the expiration date real quick... Is it the coupon for this month?");
    if (couponValid === true) {
        alert("Perfect! Here's your Good Burgers with some Good Savings. Have a Good Day!");
    } else {
        alert("I'm sorry, it looks like this coupon is expired. That's no Good.")
    }
} else {
    alert("I'm sorry, you'll need to buy more than two Good Burgers or join our Good Savings program to use this coupon. Good Bye.")
}