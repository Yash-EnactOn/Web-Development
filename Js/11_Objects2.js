// const tinderUser = new Object() // singleton object
const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "semmy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const regularUser = {
  email: "semmy@example.com",
  fullname: {
    userfullname: {
      firstname: "Yash",
      lastname: "Tibadiya",
    },
  },
};

console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);

const users = [
  {
    id: 1,
    email: "user@example1.com",
  },
  {
    id: 2,
    email: "user@example2.com",
  },
  {
    id: 3,
    email: "user@example3.com",
  },
];

console.log(users[1].email);