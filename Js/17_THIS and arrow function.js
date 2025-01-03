// object
const user = {
  username: "yash",
  price: 99,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Harsh";
user.welcomeMessage();

console.log(this);

// *************************************************************************

// function
function chai() {
  let username = "yash";
  console.log(this.username); //undefined "use in object not use in function"
}
chai();

const chai2 = function () {
  let username = "yash";
  console.log(this.username); //undefined "use in object not use in function"
};
chai2();

// *************************************************************************

//Arrow function
const fun1 = () => {
  let username = "yash";
  console.log(this.username); //undefined "use in object not use in function"
  console.log(this);
};
fun1();

// arrow function example
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }; //simple

// const addTwo = (num1, num2) => num1 + num2; // implicit conversion
const addTwo = (num1, num2) => ( num1 + num2 ); // implicit conversion

console.log(addTwo(3, 4));

const name = (name1, name2) => ({ username: name1, username2: name2 });
console.log(name("user1", "user2"));

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
myArray.forEach(() => {});
