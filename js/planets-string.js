(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    planetsString = planetsArray.join("<br>");

    console.log(planetsString);

    /** This could be useful for using JavaScript to modify the formatting of
     * an HTML page without altering the actual HTML. */

    // * My Solution: * //

    console.log(planetsArray);
    let planetsList = planetsArray.join("</li><li>");
    planetsArray = planetsList.split("");
    planetsArray.unshift("<ul><li>");
    planetsArray.push("</li></ul>");
    planetsList = planetsArray.join("");
    console.log(planetsList);

    // * Class Solution: * //

    // let newPlanetsArray = [];
    // planetsArray.forEach(function (planet) {
    //     newPlanetsArray.push(`<li>${planet}</li>`);
    //     return newPlanetsArray;
    // });
    // newPlanetsArray.unshift("<ul>");
    // newPlanetsArray.push("</ul>");
    // let newPlanetsString = newPlanetsArray.join('');
    // console.log(newPlanetsString);

})();

/* ########################################################################## */
