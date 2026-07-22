// //ternary operators
// let age1 = 20;
// let result1 = age1 >= 18 ? "eligible for voting" : "not eligible for voting";
// console.log("age:", age1, "-", result1);
// let age2 = 17;
// let result2 = age2 >= 18 ? "eligible for voting" : "not eligible for voting";
// console.log("age:", age2, "-", result2);
// //spread operator
// const originalValue = [1, 2, 3];
// const extendedValue = [...originalValue, 4, 5, 6];
// console.log("extended values:", extendedValue);
// const combineValues = [...originalValue, ...extendedValue, 7, 8, 9];
// console.log("combines values:", combineValues);
// //rest operator
// function createuser(name, age, ...hobbies) {
//   return {
//     name: name,
//     age: age,
//     hobbies: hobbies,
//   };
// }
// let user = createuser("sara", 21, "drawing", "traveling", "gaming");
// console.log(user);
// //optional chaining
// const user1 = {
//   profile: {
//     name: "sara",
//     address: {
//       city: "tirunelveli",
//     },
//   },
// };
// console.log(user1.profile?.name);
// console.log(user1.profile?.address?.city);
// console.log(user1.profile?.address?.pincode);
// const user2 = {};
// console.log(user2.profile?.name);
// console.log(user2.address.city);
// //nullish coalesing operators

let username = null;
let finalname = username ?? "sara";
console.log(finalname);
let age = 21;
let finalage = age ?? 18;
console.log(finalage);
