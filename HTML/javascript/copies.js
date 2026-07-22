let alphabet = [
  "a",
  "f",
  "y",
  "k",
  "d",
  "y",
  "e",
  "a",
  "h",
  "u",
  "e",
  "r",
  "y",
  "b",
  "c",
  "k",
];
let consonants = alphabet.find((alp) => alp === "k");
let vowelletter = alphabet.find((alp) => alp === "e");
let nullletter = alphabet.find((alp) => alp === "z");
console.log(consonants);
console.log(vowelletter);
console.log(nullletter);

let alphabets = [
  "a",
  "f",
  "y",
  "k",
  "d",
  "y",
  "e",
  "a",
  "h",
  "u",
  "e",
  "r",
  "y",
  "b",
  "c",
  "k",
];
let consonantss = alphabets.filter((alps) => alps === "k");
let vowelletterr = alphabets.filter((alps) => alps === "e");
let nullletterr = alphabets.filter((alps) => alps === "z");
console.log(consonantss);
console.log(vowelletterr);
console.log(nullletterr);

// let numbers = [1, 2, 3, 4, 2, 3, 7, 5, 3, 6, 7, 7, 2, 9, 3, 2, 1, 2, 4];
// let evennumber = numbers.filter((num) => num === 2);
// let oddnumber = numbers.filter((num) => num === 7);
// let nullnumber = numbers.filter((num) => num === 8);
// console.log("evennumber", evennumber);
// console.log("oddnumber", oddnumber);
// console.log("nullnumber", nullnumber);

// const numbers = [10, 20, 30, 40];
// const add = numbers.reduce((acc, curr) => acc + curr, 2);
// const sub = numbers.reduce((acc, curr) => acc - curr);
// const multiplication = numbers.reduce((acc, curr) => acc * curr, 3);
// const div = numbers.reduce((acc, curr) => acc / curr);
// console.log(multiplication);
// console.log(add);
// console.log(sub);
// console.log(div);
