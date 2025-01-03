// switch syntax

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Month not found");
    break;
}

// if case don't have break; matched case and other all cases run and give output (default case also run)
// run up to next break;

// "String + Break" Example:
const number = "2";
switch (number) {
  case "1":
    console.log("this is number 1");
    break;
  case "2":
    console.log("this is number 2");
  case "3":
    console.log("this is number 3");
  case "4":
    console.log("this is number 4");

  default:
    console.log("Not a Number");
    break;
}
