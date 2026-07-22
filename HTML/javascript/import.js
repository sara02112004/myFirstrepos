const { username, userpassword, security } = require("./modules");
console.log(username);
console.log(userpassword("12345"));
const user2 = new security("secured");
user2.show();
