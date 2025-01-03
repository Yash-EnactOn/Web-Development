// conversion is use for to convert one datatype in other data type
// Ex. number -> string
//                               // after conversion
  let score = "33";         //type: number value: 33
// let score = "53abc";     //type: number value: NaN
// let score = null         //type: number value: 0
// let score = undefined    //type: number value: NaN
// let score = true         //type: number value: 1
// let score = false        //type: number value: 0

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 99
let booleanISLoggedIn = Boolean(isLoggedIn);
console.log(booleanISLoggedIn);

// 1 => true  0 => false
// "" => false
// "yash" => true
// 69 => true

let x = 34

let stringNumber = String(x);
console.log(stringNumber);
console.log(typeof stringNumber);

// ****************************** Oprations ******************************

let value = 3
let negative = -value
console.log(negative);

// + - * / % **

let str1 = "Yash"
let str2 = " Tibadiya"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

console.log(+true);
console.log(+"");


// FIXME: IMP
// prefix postfix

let counter = 100
let diffCounter = ++counter // ++counter incriment value both side
// output : 101 101
//let diffCounter = counter++ // counter++ incriment value of counter only
// output : 101 100

console.log(counter);         
console.log(diffCounter);
