// JavaScript is a dynamically typed language
// Typescript is a statically typed language

// primitive
// 7 types : String, Number, Boolean, BigInt, Symbol, null, undefined

const x = 100; // Number
const y = 100.69; // number

const isLoggedIn = true; // boolean
const outsideTemp = null; // object

let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");
// same value symbol are different
console.log(id == anotherId); // false
console.log(id === anotherId); // false

const bigNumber = 33556575423154235123151n;
console.log(typeof bigNumber);

// #################################################################

// Reference (non primitive)
// Array, Object, Function

// Array
const heros = ["Captain America", "Iron Man", "Thor"];

// Object
let myObject = {
  name: "Yash",
  age: "20",
};

// Function
const myFunction = function () {
  console.log("hello world");
};

console.log(typeof heros);

// *************************************************************************

// 2 types of memories are use
// Stack (Primitive)
// Heap (non primitive)

// Stack
let myName = "yaash";

let anotherName = myName;
anotherName = "Yash";

console.log(myName);
console.log(anotherName);

// Heap
let user = {
  email: "user@example.com",
  upi: "user@oksbi",
};

let userX = user;
userX.email = "user@gmail.com";

console.log(user.email);
console.log(userX.email);

// Stack
// Memory Allocation: Static and fixed size.
// Allocation/Deallocation: Managed automatically by the compiler. Allocation and deallocation are very fast and occur in a Last In, First Out (LIFO) order.
// Usage: Stores primitive data types (numbers, booleans, etc.), function call frames (including local variables and return addresses), and reference pointers to heap objects.
// Lifetime: Variables are automatically deallocated when they go out of scope.
// Access Speed: Generally faster due to its structured access pattern.
// Size: Typically smaller and limited compared to the heap.

// Heap
// Memory Allocation: Dynamic and can grow as needed.
// Allocation/Deallocation: Managed manually (explicitly in languages like C/C++, or automatically by a garbage collector in languages like JavaScript). Allocation is slower compared to the stack.
// Usage: Stores objects, dynamic data structures (arrays, linked lists, etc.), and anything that needs to persist beyond the current function call.
// Lifetime: Variables persist until they are explicitly deallocated or garbage collected.
// Access Speed: Generally slower due to the complexity of memory management and lack of structured access patterns.
// Size: Larger and can grow as needed, limited by the total available memory.
