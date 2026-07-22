// With Parameter
function showCity(city) {
  console.log("City: " + city);
}
showCity("Madurai");

// Without Parameter
function showDay() {
  console.log("Today is monday");
}
showDay();

// With Return
function findArea(num) {
  return num * num * num;
}
console.log("cube:", findArea(6));

// Without Return
function displayArea(length, width) {
  console.log("Area:", length * width);
}
displayArea(5, 4);

// Anonymous Function
let examResult = function () {
  console.log("Pass");
};
examResult();

// Named Function
let result = function examStatus() {
  console.log("fail");
};
result();
