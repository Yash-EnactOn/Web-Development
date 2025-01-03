var c = 300; // global scope
let a = 300; // global scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner: ", a);
}

console.log("Outer: ", a); // it is block scope
// console.log(b); // not run because it is block scope
console.log(c); // chnage the c value 300 to 30

for (let i = 0; i < array.length; i++) {
  const element = array[i];
} // i is block scope

// code in browser and run using node both have different scope
