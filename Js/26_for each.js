// foreach loop

const programing = ["js", "python", "c++", "php", "java", "ruby"];

programing.forEach(function (element) {
  // element is parameter you can give any name "val, num, item"
  console.log(element);
});
programing.forEach((element) => {
  // element is parameter you can give any name "val, num, item"
  console.log(element);
});

function prineMe(element) {
  console.log(element);
}
programing.forEach(prineMe);

programing.forEach((element, index, arr) => {
  console.log(element, index, arr);
});

// impotant
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((element) => {
  console.log(element.languageName, element.languageFileName);
})

