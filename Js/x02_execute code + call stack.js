// JavaScript execution context

// first and everytime create global execution context

// _________________
// | {all js code} | -> global execution context
// |_______________| -> referance by this keyword

// 3 typeof execution context
// 1. Global execution context
// 2. Function execution context
// 3. Evaluator execution context

// code run in two phase
// 1. Memory creation phase
// 2. execution phase

//************************************************************************************

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// Execution stapes
// 1. code goes in global execution and refer by this keyword
// 2. Memory allocation phase
// va1 -> undefined
// va2 -> undefined
// addNum -> function defination
// result1 -> undefined
// result2 -> undefined
// 3. execution phase
// val1 <- 10
// val2 <- 5

// same for result2
// addNum -> one box(new execution context) which includes after execution it deletes
//   new variable environment +
//   execution thread
// for addNum step 2(Memory allocation phase) and 3(execution phase) execut again

// ++++++++++++++++++++++++++++++++=
// for addNum
// 1. Memmory allocation phase
// val1 -> undefined
// val2 -> undefined
// total -> undefined
// 2. execution phase
// num1 <- 10
// num2 <- 5
// total <- 15         // it return in global execution context

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^66

// call stack

//             |                |
//             |                |
//             |                |
//             |                |
//             |                |
//             |                |
//             |________________|
//  Method :   |global execution|
//      One()  |________________|

//             |                |
//             |                |
//             |                |
//             |                |
//             |                |
//             |      One()     |
//             |________________|
//             |global execution|
//             |________________|  // one() goes for execution

//             |                |
//             |                |
//             |                |
//             |                |
//             |                |
//             |                |
//             |________________|
//             |global execution|
//             |________________|  one() // after execution

// *************************************************************************************
//             |                |
//             |                |
//             |                |
//             |                |
//             |                |
//             |      One()     |
//   two()     |________________|
//   three()   |global execution|
//             |________________|

//             |                |
//             |________________|
//             |     Three()    |
//             |________________|
//             |      Two()     |
//             |________________|
//             |      One()     |
//             |________________|
//             |global execution|
//             |________________|
// call stack use LIFO (last in first out) method
// so Three() execut first
