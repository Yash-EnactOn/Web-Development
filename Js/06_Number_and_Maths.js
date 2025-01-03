const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 3328.2338
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(3));

const oneM = 1000000
console.log(oneM.toLocaleString('en-US'));
console.log(oneM.toLocaleString('en-IN'));


// ****************************** Maths ******************************

console.log(Math);
console.log(Math.abs(-4));  // convert into positive number
console.log(Math.abs(4));   // not convert because it is positive

console.log(Math.round(4.6));
console.log(Math.ceil(4.1));  // give upper value => 5
console.log(Math.floor(4.7)); // give lower value => 4

console.log(Math.min(7, 2, 5, 1, 0, 8, 11)); 
console.log(Math.max(7, 2, 5, 1, 0, 8, 11)); 

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
