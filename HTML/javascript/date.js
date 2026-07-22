const fulldate = new Date().toString();
const dateonly = new Date().toDateString();
const timeonly = new Date().toTimeString();
const isoformat = new Date().toISOString();
console.log("full date:", fulldate);
console.log("date only:", dateonly);
console.log("time only:", timeonly);
console.log("ISO format:", isoformat);

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; //month(0-11,so we add 1)
const year = today.getFullYear();
const hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const formattedDateTime = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
console.log("formattedDateTime:", formattedDateTime);
