// function divide(a, b) {
//   return new Promise((resolved, rejected) => {
//     if (b === 0) {
//       rejected("cannot divisible by zero");
//     } else {
//       resolved(a / b);
//     }
//   });
// }
// async function divided_value() {
//   let result = await divide(20, 0);
//   console.log(result);
// }

// const { log } = require("async");

// divided_value();
// async function divvalue_try_catch() {
//   try {
//     const result = await divide(20, 0);
//     console.log(result);
//   } catch (error) {
//     console.log("error:", error);
//   }
// }
// divvalue_try_catch();

// async function welcome() {
//   return "Welcome to gloud";
// }

// welcome().then((success) => {
//   console.log(success);
// });

//parallel execution:

async function task1() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved("function 1 completed");
    }, 2000);
  });
}
async function task2() {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved("function 2 completed");
    }, 6000);
  });
}
async function output() {
  let [result1, result2] = await Promise.all([task1(), task2()]);
  console.log(result1);
  console.log(result2);
}
output();
