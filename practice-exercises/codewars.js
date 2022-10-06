// function highAndLow(numbers) {
//     numbers = numbers.split(" ");
//     return Math.max(...numbers) + " " + Math.min(...numbers);
// }
const alphabet = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
// console.log(alphabet.indexOf("a"));
function alphabetPosition(text) {
    for(var i = 0; i < text.length; ++i){
        alphabet.indexOf(text[i]);
    }
}
console.log(alphabetPosition("Hello"));