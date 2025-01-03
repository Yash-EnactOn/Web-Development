// Array

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[2]);

const myHeros = ["Captain America", "Iron Man", "Thor"];
const myArr2 = new Array(0, 1, 2, 3, 4, 5);

// Array Methods

myArr.push(6);
myArr.push(7);
myArr.pop();
myArr.unshift(9); // Add value in starting position
myArr.shift(); // Remove first value from array

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

console.log("+");
console.log("+");
console.log("+");
console.log("+");
console.log("+");

// slice & splice
// TODO: most IMP

const Array_x = [0, 1, 2, 3, 4, 5];
console.log("A ", Array_x);

const Array_y = Array_x.slice(1, 3);
console.log(Array_y);
console.log("B ", Array_x);

const Array_z = Array_x.splice(1, 3);
console.log(Array_z);
console.log("c ", Array_x);


// slice : it give copy of original array like. [0, 1, 2, 3, 4, 5] => answer [1, 2] and original [0, 1, 2, 3, 4, 5]
// splice : it changes the value of original array like. [0, 1, 2, 3, 4, 5] => answer [1, 2, 3] and original [0, 4, 5]