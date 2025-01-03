// while

let index = 0;
while (index <= 10) {
  console.log(`value of index: ${index}`);
  index = index + 2;
}

const myArray = ["Captain America", "Iron Man", "Thor"];
let Superhero = 0;

while (Superhero < myArray.length) {
  console.log(`value of arr: ${myArray[Superhero]}`);
  Superhero++;
}

// do while

let score = 1;
// let score = 11;
do {
  console.log(`Score: ${score}`);
  score++;
} while (score <= 10);
