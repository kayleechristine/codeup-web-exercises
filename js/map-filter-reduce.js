"use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let userData = users.filter(user => user.languages.length >= 3);
console.log(userData);

// TODO: Use .map to create an array of strings where each element is a user's email address

let emails = users.map(user => user.email);
console.log(emails);

// TODO: Use .reduce to get the total years of experience from the list of users.

let totalExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(totalExp);

// TODO: Once you get the total of years you can use the result to calculate the average.
let averageExp = totalExp / users.length;
console.log(averageExp);

// TODO: Use .reduce to get the longest email from the list of users.

let longEmail = emails.reduce((email1, email2) => {
    if (email1.length > email2.length) {
        return email1;
    } else {
        return email2;
    }
});
console.log(longEmail);

// TODO: Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let instructors = 'Your instructors are: ';
// let getNames = users.map(user => instructors += `${user.name} `);
// console.log(instructors);

let instructors = users.reduce(function (beginning, user, index) {
    if (index === users.length - 1) {
        return beginning + user.name + ".";
    }
    return beginning + user.name + ", ";
}, 'Your instructors are: ');
console.log(instructors);