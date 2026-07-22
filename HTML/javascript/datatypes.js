// let message = "hello";
// console.log("primitive string:", message);
// let count = 5;
// console.log("primitive number:", count);
// let isActive = true;
// console.log("primitive boolean:", isActive);
// let emptyvalue = null;
// console.log("primitive null:", emptyvalue);
// let notAssigned;
// console.log("primitive undefined:", notAssigned);
// let uniqueID = Symbol("ID");
// console.log("primitive symbol:", uniqueID);
// let largeNumber = BigInt(1234567890123456789012345678);
// console.log("primitive bigint:", largeNumber);

// let user = { name: "sara", age: 21 };
// console.log("object:", user);
// let number = [1, 2, 3];
// console.log("array:", number);
// let greet = function () {
//   return number;
//   return "hello";
//   return;
// };
// console.log("function:", greet());
// const a = 10;
// function myFunction() {
//   return a;
// }
// console.log(myFunction());

// //type conversion
// let str = "43";
// let num = Number(str);
// console.log("using number():", num);
// let strInt = "42.5";
// let num1 = parseInt(strInt);
// console.log("using praseint:", num1);
// let strFloat = "42.5";

// let num2 = parseFloat(strFloat);
// console.log("using parsefloat:", num2);
//string
let num = 42;
let str = String(num);
console.log("using string():", str);
let str1 = num.toString();
console.log("using tostring:", str1);
let str2 = `${num}`;
console.log("using template literals:", str2);

let a = "welcome";
let b = `hello ${a} you all`;
console.log(b);
