const Name = "Yash";
const repoCount = 56;

// console.log(Name + repoCount + " value");  // not write like this

console.log(`Hello, my name is ${Name} and my repo count is ${repoCount}`);

//other way to deffine string
const gameName = new String("GTA 6");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("T"));

const newGameName = gameName.substring(0, 3);
console.log(newGameName);

const anotherGameName = gameName.slice(-4, 2);
console.log(anotherGameName);

const newString = "      Yash       ";
console.log(newString);
console.log(newString.trim());

const url = "https://yash.com/yash%20tibadiya";
console.log(url.replace("%20", "-"));
console.log(url.includes("yash"));

const splitString = "i-wont-to-split-this-string";
console.log(splitString.split("-"));
