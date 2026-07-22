const carmodel = {
  name: "BMW",
  year: 2020,
  color: "black",
};
const updatedDetails = {
  ...carmodel,
  color: "white",
  engine: "V6",
  seats: 5,
};
const finaldetails = {
  ...updatedDetails,
  sunroof: true,
};
console.log("Car details:", finaldetails);
