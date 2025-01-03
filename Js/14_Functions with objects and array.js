function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));

function calculateCP(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCP(200, 400, 500, 2000));

const user = {
  username: "yash",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user);
handleObject({
  username: "sam",
  price: 299,
});

// --------------------------------------------------------------------
const myNewArray = [200, 300, 400, 500];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 300, 400, 500]));
