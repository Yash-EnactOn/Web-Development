const course = {
  coursename: "react component course",
  price: "999",
  courseInstructor: "Yash",
};

// console.log(course.courseInstructor);

const { courseInstructor: CI } = course;
console.log(CI);

// const navbar = ({ company }) => {};
// navbar((company = "YT industrys"));

// json
// {
//   "name": "yash",
//   "coursename": "react component course",
//   "price": "free"
// }