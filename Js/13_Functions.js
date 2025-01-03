function sayMyName() {
  console.log("Y");
  console.log("A");
  console.log("S");
  console.log("H");
}
sayMyName();

// --------------------------------------------------------------------
function addTwoNumbers(number1, number2) {
  // number1 & number2 are parameters
  // console.log(number1 + number2);
  return number1 + number2;
}
addTwoNumbers();
addTwoNumbers(3, 4); // 3 & 4 are arguments
addTwoNumbers(3, "4");
addTwoNumbers(3, null);

const result = addTwoNumbers(3, 6);
console.log("result: ", result); // undefined

// --------------------------------------------------------------------
function add2num(num1, num2) {
  let ans = num1 + num2;
  return ans;
  console.log("yash"); // after writing return not any code works
}
const ans = add2num(1, 4);
console.log("ans: ", ans);

// --------------------------------------------------------------------
function loginUserMessage(username) {              // also give default values (username = "sam")
  // also write like this if(!username){}
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("yash"));
console.log(loginUserMessage());
