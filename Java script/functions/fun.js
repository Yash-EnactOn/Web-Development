console.log("this is Functions")

function greet(name, greetText="Greetings from javascript") {
    let name1 = "name1";       // -not use
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c) {
    let d = a + b + c;
    return d;
    console.log("function sum"); // - this not run
}

let name = "Yash";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Harry";
let greetText1 = "Good Morning"
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
// greet(name3);

// let retaurnVsl = greet(name3);
// console.log(retaurnVsl);

let returnVal = sum(1,2,3);
console.log(returnVal);

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
