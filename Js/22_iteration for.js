// for

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number"); // this is run after 4 number is printed -> 4, 5 is best number, 5...
  }
  console.log(element);
}
// console.log(element); // cannot access element because it is block scope

for (let i = 1; i < 10; i++) {
  // console.log(`Outer value: ${i}`);
  for (let j = 1; j < 10; j++) {
    // console.log(`inner value: ${j} and ${i}`);
    // console.log(i + " * " + j + " = " + i*j);
  }
}

const myArray = ["Captain America", "Iron Man", "Thor"];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  // in i++ remove ++ to loop run infinite at first value
  // not use <= because loop end at value 3 and it is undifined
  const element = myArray[i];
  console.log(element);
}

// break and continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("5 is best number");
    break;
  }
  console.log(`value of index: ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("5 is best number");
    continue;
  }
  console.log(`value of index: ${index}`);
}
