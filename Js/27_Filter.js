// const programing = ["js", "python", "c++", "php", "java", "ruby"];
// const values = programing.forEach((item) => {
//   console.log(item);
//   return item
// })
// console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for "filter"
// const newNums = myNums.filter((num) => num > 4)
const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums);

// for "forEach"
const newNum = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});
console.log(newNum);
