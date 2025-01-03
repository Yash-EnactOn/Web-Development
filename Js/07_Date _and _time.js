// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2025, 0, 15); // month starts from 0
console.log(myCreatedDate.toDateString());

let myCreatedD = new Date(2025, 0, 15, 6, 7, 30);
console.log(myCreatedD.toLocaleString());

let myCD = new Date("01-31-2024"); // month starts from 1
console.log(myCD.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCD.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1); // month starts from 1
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "short",
  })
);
