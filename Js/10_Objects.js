// singleton
// making object using constructor this object is singleton [ object.create() ]

//object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Yash",
  "full name": "Yash Tibadiya",
  [mySym]: "myKey1",
  age: 20,
  location: "Surat",
  email: "yash@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

console.log(JsUser[mySym]);

JsUser.email = "yash@gpt.com";
// Object.freeze(JsUser);
JsUser.email = "yash@gmail.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello, Js Users!");
};
JsUser.greeting2 = function () {
  console.log(`Hello, Js Users, ${this.name}`); //  `` is necessary
};
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
