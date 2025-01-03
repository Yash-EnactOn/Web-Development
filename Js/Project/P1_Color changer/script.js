const btn = document.querySelectorAll(".button");
const bd = document.querySelector("body");

btn.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      bd.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      bd.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      bd.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      bd.style.backgroundColor = e.target.id;
    }
  });
});

// other solution

// btn.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     bd.style.backgroundColor = e.target.id
//   })
// })
