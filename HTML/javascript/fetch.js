fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("failed");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("error occured", error);
  });

class user {
  constructor() {}
  methodName() {}
}
