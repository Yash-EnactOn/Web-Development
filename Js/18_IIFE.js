// Immediately Invoked Function Expressions (IIFE)

(function fun1() {
  //named IIFE functions
  console.log("DB connected");
})(); // every time use IIFE function then close by `;` otherwise other functions give errors
// use to avoid global scope polution

(() => {
  //simple IIFE functions
  console.log("DB connected 2");
})();

((name) => {
  console.log(`DB connected 2 ${name}`);
})("Yash");
