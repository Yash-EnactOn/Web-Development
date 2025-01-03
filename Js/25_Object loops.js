const myObject = {
  game1: "Cricket",
  game2: "Football",
  game3: "Hockey",
};
// for (const [key, value] of Object.entries(myObject)) {
//   console.log(key, ":", value);
// }
for (const key in myObject) {
  console.log(key, ":", myObject[key]);
}

const programing = ["js", "python", "c++", "php", "java", "ruby"];
for (const key in programing) {
  console.log(key);
  console.log(programing[key]);
}

// map is not iterable
const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India"); // remove duplicate

for (const key in map) {
  console.log(key); // not give any output
}
