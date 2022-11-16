"use strict";
$(function(){
    $(document).ready(function(){

        // Alerts when the DOM has finished loading
        // alert("DOM has finished loading.");

        // Changes the h1 header to "Hello jQuery!"
        // $('h1').html("Hello jQuery!");

        // Alerts the contents of the element with the "title" id
        // let contents = $('#title').html();
        // alert(contents);

        // Alerts the content of the element with the "header" id
        // let contents = $('#header').html();
        // alert(contents);

        // Changed the "header" id to "title"
        // let contents = $('#title').html();
        // alert(contents);
        // jQuery only alerted the first element with the "title" id
        // Changed the second "title" id back to "header"

        // Creates a 1px red border around all elements with the "codeup" class
        // $('.codeup').css('border','1px solid red');
        // The third li no longer has a border after changing the class to "blah"
        // Giving the third li an id of "codeup" does not give it the border

        // Changes the font size of all elements with the "li" tag to 20px
        $('li').css('font-size','20px');
        // $('h1').css('background-color','yellow');
        // $('p').css('background-color','lime');
        // $('li').css('background-color','cyan');
        let contents = $('h1').html();
        alert(contents);

        // Using the multiple selectors methodology to change all the highlighted elements at once
        $('h1, p, li').css('background-color', 'yellow');

    });
})();