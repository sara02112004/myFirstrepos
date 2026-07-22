// //object entries
// let carmodel = {
//   brand: "BMW",
//   color: "black",
//   year: "2020",
// };
// const outputmodels = Object.entries(carmodel);
// console.log(outputmodels);
// let updatemodel = {
//   seat: 5,
//   sunroof: true,
// };
// //object assign
// const finaldata = Object.assign(carmodel, updatemodel);
// console.log(finaldata);
// Object.seal(updatemodel);
// //object seal
// updatemodel.seat = 7;
// console.log("AFTER SEAL", updatemodel);
// let user = "saratha";
// if (user == "saratha") {
//   console.log("user login successfully");
// } else {
//   console.log("invalid user");
// }

let attendance = 80;
let feespaid = true;
let allclear = false;
let idcard = false;
// if (attendance <= 75) {
//   console.log("you dont have 75% attendance");
// } else if (feespaid == false) {
//   console.log("fees payment is not paid");
// } else if (allclear == false) {
//   console.log("you have arrear");
// } else if (idcard == false) {
//   console.log("you dont have id card");
// } else {
//   console.log("you are eligible for Exam");
// }
if (
  attendance <= 75 ||
  feespaid == false ||
  allclear == false ||
  idcard == false
) {
  console.log("you are not eligible for exam");
}
