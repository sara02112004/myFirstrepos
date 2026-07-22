//task1
function printvaraiable() {
  try {
    console.log(userdetails);
  } catch (error) {
    console.log("varaiable name is not defined");
  }
}
printvaraiable();

//task2
function ageforvoting(a) {
  return new Promise((resolve) => {
    if (a >= 18) {
      resolve("Eligible for vote");
    } else {
      throw new Error("Not eligible for vote");
    }
  });
}

async function eligibleornot() {
  try {
    const result = await ageforvoting(15);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

eligibleornot();

//task3
async function task1() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved("loading user data");
    }, 2000);
  });
}
async function task2() {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved("loading product");
    }, 6000);
  });
}
async function task3() {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved("loading product");
    }, 5000);
  });
}
async function output() {
  let [result1, result2, result3] = await Promise.all([
    task1(),
    task2(),
    task3(),
  ]);
  console.log(result1);
  console.log(result2);
  console.log(result3);
}
output();
