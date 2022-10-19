(function() {
    "use strict";

    /* ##################################################################### */ /* Complete */

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Kaylee",
        lastName: "Morris"
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /* ##################################################################### */ /* Complete */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return `Hello from ${person.firstName} ${person.lastName}!`;
    }

    console.log(person.sayHello());

    /* ##################################################################### */ /* Complete */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // console.log(shoppers.length);

    // shoppers.forEach(function(shopper) {
        for (let i = 0; i < shoppers.length; i++) {
            console.log(`Welcome, ${shoppers[i].name}! Here's your receipt:`);
            if (shoppers[i].amount >= 200) {
                let discount = (shoppers[i].amount * 0.12).toFixed(2);
                let total = (shoppers[i].amount - discount).toFixed(2);
                console.log(`[ Name: ${shoppers[i].name} | Amount: \$${shoppers[i].amount} | Discount: \$${discount} | Subtotal: \$${total} ]`);
            } else {
                console.log(`[ Name: ${shoppers[i].name} | Amount: \$${shoppers[i].amount} | Discount: \$0 | Subtotal: \$${shoppers[i].amount} ]`);
            }
        }
    // })

    /* ##################################################################### */ /* Complete */

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            genre: "Fantasy"
        },
        {
            title: "Shadow and Bone",
            author: "Leigh Bardugo",
            genre: "Fantasy"
        },
        {
            title: "Six of Crows",
            author: "Leigh Bardugo",
            genre: "Fantasy"
        },
        {
            title: "The Way of Kings",
            author: "Brandon Sanderson",
            genre: "Fantasy"
        },
        {
            title: "Truly Devious",
            author: "Maureen Johnson",
            genre: "Murder Mystery"
        },
        {
            title: "One of Us is Lying",
            author: "Maureen Johnson",
            genre: "Murder Mystery"
        }
    ]

    // console.log(`${books[2].title} is a ${books[2].genre.toLowerCase()} book written by ${books[2].author}.`);
    // console.log(`${books[3].title} is a ${books[3].genre.toLowerCase()} book written by ${books[3].author}.`);
    // console.log(`${books[5].title} is a ${books[5].genre.toLowerCase()} book written by ${books[5].author}.`);

    /* ##################################################################### */ /* Complete */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function favoriteBooks() {
        for (let i = 0; i < books.length; i++) {
            console.log(`Book #${i + 1} \n Title: ${books[i].title} \n Genre: ${books[i].genre} \n Author: ${books[i].author} \n ---`);
        } return '';
    }

    favoriteBooks();

    /* ##################################################################### */ /* BONUS */ /* Complete */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, genre, author) {
        books.push( {
            title: title,
            genre: genre,
            author: author
        })
        console.log(`${title} has been added to your favorites list.`)
    }

    createBook("The Bad Beginning: Or, Orphans!", "Mystery", "Daniel Handler");

    // favoriteBooks(); // Now logs the new book at the end of the list

    function showBookInfo(title) {
        let index = books.findIndex(book => book.title === title);
        return `${books[index].title} is a ${books[index].genre.toLowerCase()} book written by ${books[index].author}.`;
    }

    // console.log(showBookInfo("The Way of Kings"));

    function favBookInfo() {
        for (let i = 0; i < books.length; i++) {
            console.log(showBookInfo(books[i].title));
        } return '';
    }

    favBookInfo();

})();