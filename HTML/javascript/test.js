// // // const employees = [
// // //   {
// // //     name: "sara",
// // //     salary: 50000,
// // //   },
// // //   {
// // //     name: "ketzi",
// // //     salary: 25000,
// // //   },
// // //   {
// // //     name: "siva",
// // //     salary: 70000,
// // //   },
// // //   {
// // //     name: "nalan",
// // //     salary: 53000,
// // //   },
// // // ];
// // // const filteredsalary = employees.filter((employee) => employee.salary > 50000);
// // // console.log(filteredsalary);

// // const products = [
// //   {
// //     name: "laptop",
// //     available: true,
// //   },
// //   {
// //     name: "computer",
// //     available: true,
// //   },
// //   {
// //     name: "mobile",
// //     available: false,
// //   },
// //   {
// //     name: "mouse",
// //     available: true,
// //   },
// // ];
// // const filtered = products.filter((product) => product.available === true);
// // console.log(filtered);

// const student = {
//   name: "Arun",
//   age: 21,
//   department: "CSE",
//   mark: 85,
// };
// console.log(student.name);
// console.log(student.department);
// let result = (student["mark"] = 90);
// console.log(result);
// console.log((student.college = "abc"));
// delete student.age;
// console.log(student);

const employee = {
  id: 101,
  name: "Priya",
  salary: 45000,
  designation: "Developer",
};
employee.salary;
employee.salary += 5000;
employee.experience = 3;
delete employee.id;
console.log(employee);
console.log("designation" in employee);

function welcome() {
  return "welcome to our website";
}
console.log(welcome());

function message(name) {
  return `${name} hello`;
}
console.log(message("sara"));

function sara(ketzi) {
  console.log("welcome", ketzi);
}
sara("sara");

var result = function areaofrectangle(l, b) {
  return l * b;
};
console.log("area of rectangle is", result(2, 6));

var order = function () {
  console.log("order placed successfully");
};
order();

const voting = new Promise((resolve, rejected) => {
  setTimeout(() => {
    let age = 20;
    if (age >= 18) {
      resolve("eligible for voting");
    } else {
      rejected("not eligible for voting");
    }
  }, 2000);
});

voting
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("login successfull");
    }, 2000);
  });
}
async function loginstatus() {
  const result = await login();
  console.log(result);
}
loginstatus();
