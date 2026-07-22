// let user = {
//   name: "sara",
//   dept: "BE",
//   college: "PSN",
// };
// //object keys
// const outputkeys = Object.keys(user);
// console.log("output keys:", outputkeys);
// //object values
// const outputvalues = Object.values(user);
// console.log("output values:", outputvalues);
// // object entries
// const outputentries = Object.entries(user);
// console.log("object entries:", outputentries);
// let obj1 = {
//   fruits1: "mango",
//   veg: "lady finger",
// };
// let obj2 = {
//   animal: "tiger",
//   bird: "peacock",
// };
// const mergeobjects = Object.assign(obj1, obj2);
// console.log(mergeobjects);
// const spreadop = { ...obj1, ...obj2 };
// console.log("spread:", spreadop);

//freeze
let user = {
  name: "sara",
  dept: "BE",
  college: "PSN",
};
Object.seal(user);
user.city = "tvl";
((user.name = "saratha"), console.log(user));
