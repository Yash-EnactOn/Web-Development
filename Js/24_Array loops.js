// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = ["Hello", "Hi", "Hey"];
for (const greet of greetings) {
  console.log(greet);
}

const hello = "Hello world!";
for (const char of hello) {
  console.log(char);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India"); // remove duplicate
console.log(map);

for (const key of map) {
  console.log(key);
}
for (const [key, value] of map) {
  console.log(key, ":", value);
}

const myObject = {
  game1: "Cricket",
  game2: "Football",
  game3: "Hockey",
};

for (const [key, value] of myObject) {
  // not work gives error
  console.log(key, ":", value);
}
// for (const [key, value] of Object.entries(myObject)) {
//   console.log(key, ":", value);
// }
