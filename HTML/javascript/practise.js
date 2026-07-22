let user = {
  name: "saratha",
  age: 21,
  city: "tirunelveli",
  state: "tamilnadu",
  education: {
    degree: ["be", "mba"],
    passout: 2026,
  },
  userdetails: function () {
    console.log("hello");
  },
};
//access
console.log(user.state);
console.log(user["name"]);
//add
user.contact = 7893038455;
console.log(user);
user["nation"] = "india";
console.log(user);
//modify
user.name = "ketzi";
user["age"] = 22;
console.log(user);
//delete
delete user.age;
delete user["contact"];
console.log(user);
//nested
console.log(user.education.passout);
console.log(user.education.degree[1]);
user.userdetails();

const model = {
  colour: "black",
  brand: "bmw",
};
const { colour, brand } = model;
console.log(colour);
console.log(Object.keys(user));
console.log(Object.values(user));
let outputentries = Object.entries(user);
console.log(outputentries);

// let obj1 = {
//   fruit: "mango",
//   animal: "elephant",
// };
// let obj2 = {
//   bird: "peacock",
//   insect: "housefly",
// };
// let mergeobject = Object.assign(obj1, obj2);
// console.log(mergeobject);

let obj1 = {
  fruit: "mango",
  animal: "elephant",
};
Object.seal(obj1);
obj1.fruit = "sra";
console.log(obj1);

//array
let array = [1, 2, 3, 4];
array.push(5, 6);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift("sara");
console.log(array);

let number = [1, 2, 3, 4, 5, 6];
// let withindex = number.map((num, index) => `${index}:${num}`);
// console.log(withindex);
// const result = number.map((num) => num * num);
// console.log(result);
// let array1 = ["sara", "ketzi", "venkat"];
// let result2 = array1.map((name) => name.toUpperCase());
// console.log(result2);

let numbers = [
  1, 4, 7, 6, 9, 4, 6, 2, 9, 0, 5, 7, 4, 3, 9, 6, 6, 8, 4, 3, 7, 9, 0,
];
let result1 = numbers.filter((num) => num === 10);
console.log(result1);
let result2 = numbers.find((num) => num === 2);
console.log(result2);

let num = [2, 6, 8, 5];
let reverse = num.reverse();
console.log(reverse);
let name = "sara";
let splitname = name.split("").reverse().join("");
console.log(splitname);

let a = [1, 2, 4];
let b = "sara";
console.log(Array.isArray(a));
console.log(a.includes(2));
