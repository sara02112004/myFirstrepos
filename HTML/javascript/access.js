let user = {
  name: "sara",
  age: 21,
  city: "tirunelveli",
  area: "ktc nager",
};

console.log("before adding contact:", user);
user.contact = "hello";
user["hobby"] = "reading";
console.log("after adding contact and hobby:", user);
