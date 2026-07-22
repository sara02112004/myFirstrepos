// const sara = new Promise((success, failed) => {
//   setTimeout(() => {
//     let output = false;
//     if (output) {
//       success("operation completed successfully");
//     } else {
//       failed("operation failed");
//     }
//   }, 1000);
// });
// sara
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   })
//   .finally(() => {
//     console.log("operation completed");
//   });
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully");
//     }, 5000);
//   });
// }
// async function getData() {
//   console.log("Fetching data...");
//   const result = await fetchData();
//   console.log(result);
// }
// getData();
let a = [1, 2, 3, 4, 5];
a[7] = 3;
console.log(a);

function add(name, city = "tvl", age) {
  return `name is ${name} from ${city} age is ${age}`;
}
add("sara", 21);
