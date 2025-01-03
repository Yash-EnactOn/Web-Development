// const userEmail = "y@yash.ai"; // nonempty string is truthy
// const userEmail = ""; // empty string is falsy
const userEmail = []; // empty array is truthy

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// Falsy values
// false, 0, -0, "", BigInt 0n, null, undefined, Nan

// truthy values
// "0", "false", " ", [], {}, function(){}

// How to check empty array
if (userEmail.length === 0) {
  console.log("Array is empty");
}

// How to check empty object
if (Object.keys(userEmail).length === 0) {
  console.log("Object is empty");
}

// interview question
false == 0; // true
false == ""; // true
0 == ""; // true

(false == "") == 0; // false

//******************************************************************************
// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10;
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10

val1 = undefined ?? 15;
console.log(val1); // 15

val1 = null ?? 15 ?? 30;
console.log(val1); // 15

// Ternary operator
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

//    //    //    //
// Nullish Coalescing Operator and Ternary operator both are different
