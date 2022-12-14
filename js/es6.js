/* Complete the TODO items below */

const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// fill in your name and email and add some programming languages you know to the languages array
const name = 'kaylee';
const email = 'kaylee.christine.morris@gmail.com';
const languages = ['html', 'css', 'javascript'];

// replace the `var` keyword with `const`, then try to reassign a variable declared as `const`
// const name = 'joshua';
// an error was thrown when I tried reassigning the name constant variable due to it already being declared

// rewrite the object literal using object property shorthand
users.push({ name, email, languages });

// replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
// users.forEach(function(user) {
//   return names.push(user.name);
// });

const userEmails = (user) => emails.push(user.email);
const userNames = (user) => names.push(user.name);

// replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // rewrite the code below to use object destructuring assignment
  // note that you can also use destructuring assignment in the function
  // parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const { name, email, languages } = user;

  // rewrite the assignment below to use template strings
  developers.push(`${name}'s email is ${email}. ${name}'s languages: ${languages.join(', ')}`);
});

// use `let` for the following variable
let list = '<ul>';

// rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for (let developer of developers) {

  // rewrite the assignment below to use template strings
  list += `<li> ${developer} </li>`;
}

list += '</ul>';
