const form = document.querySelector("form");
// const height = parseInt(document.getElementById("#height").value);
// out of function height and weight values are empty

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show results
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is ${bmi}</span><br><span>Underweight</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Your BMI is ${bmi}</span><br><span>Normal</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is ${bmi}</span><br><span>Overweight</span>`;
    }
  }
});
