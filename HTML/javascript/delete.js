// const user = {
//   name: "sara",
//   age: 21,
//   city: "tirunelveli",
// };
// console.log("before deleting city", user);
// delete user.city;
// delete user["age"];
// console.log("after deleting city", user);

let user = {
  name: "sara",
  age: 21,
  fav: {
    hobbies: ["watching movies", "dancing", "drawing"],
    address: {
      city: "Tirunelveli",
      state: "Tamilnadu",
      country: "India",
    },
  },
  userdetails: function () {
    console.log("hello everyone");
  },
};
console.log("user details:", user);
console.log("user state:", user.fav.address.state);
console.log("first hobby:", user.fav.hobbies[0]);
user.userdetails();

const model = {
  brand: "BMW",
  color: "black",
  year: 2020,
};
const { brand, color, year } = model;
console.log(color);
console.log(brand);
