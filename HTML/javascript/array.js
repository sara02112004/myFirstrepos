// let arrays = ["sara", "ketzi", "venkat", 4, 6.8];
// console.log(arrays);
// console.log(arrays[3]);
// arrays.push("siva", "lotus");
// console.log(arrays);
// arrays.pop();
// console.log(arrays);
// arrays.unshift(11, 19.8);
// console.log(arrays);
// arrays.shift();
// console.log(arrays);
// console.log(arrays.length);

let number = [1, 2, 3, 4, 5];
let withindex = number.map((num, index) => `${index}:${num}`);
console.log(withindex);
console.log(number);
console.log(number.indexOf(3));
console.log(number.includes(4));
let users = [
  {
    name: "sara",
    age: 22,
  },
  { name: "ketzi", age: 32 },

  { name: "siva", age: 27 },
];
let userdetails = users.map((user) => `${user.name} is ${user.age} year old`);
console.log(userdetails);
