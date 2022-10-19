(function() {
    "use strict";

    /* ##################################################################### */ /* Complete */

    // create a circle object

    let circle = {
        radius: 3,

        getArea: function (radius) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Math.PI * Math.pow(radius, 2); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = circle.getArea(this.radius);
            // If doRounding is true, round the result to the nearest integer.
            if (doRounding) {
                return console.log(`Approx. area of a circle with radius: ${this.radius}, is ${Math.round(area)}`);
            }
            // Otherwise, output the complete value.
            return console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    /* ##################################################################### */ /* WIP */

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();

