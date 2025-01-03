// Do you understand DOM ?
// so can you please define me what is the difference b/w
// Event Bubbling and Event Capturing ?

// DOM : DOM stands for Document Object Model. It's a programming interface for web documents that allows users to
//       create, change, or remove elements.
//  This allows programs to interact with the page and change the document's structure, style, and content.

// Event Bubbling : we click on child div but listener not found so event goes his parent
// (parent par jo listener no male to ena parent par jay)
// like child -> parent ->-> main parent(parent of parent)

// Event Capturing : we click on child div but it run mail parent listener(child div listener cannot run)
// main parent(parent of parent) ->-> mail parent -> child


// Event Bubbling
// document.querySelector(".parent")
// .addEventListener("click", function () {
//   alert("hello!");
// });

// Event Capturing
document.querySelector(".parent")
.addEventListener("click", function () {
  alert("hello!");
}, true);

document.querySelector(".child")
.addEventListener("click", function () {
  alert("hello 2");
});
