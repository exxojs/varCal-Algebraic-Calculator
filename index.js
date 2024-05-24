//TOGGLE CALCULATORS


//buttons
const bOne = document.getElementById("cal1")
const bTwo = document.getElementById("cal2")
const bThree = document.getElementById("cal3")

//pages
const pageOne = document.querySelector(".pageOne")
const pageTwo = document.querySelector(".pageTwo")
const pageThree = document.querySelector(".pageThree")
const resultBox = document.querySelector(".bottom")

//functioniognssss
function goPageOne(){
    pageOne.style.display = "flex";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    resultBox.style.display = "none";

}

function goPageTwo(){
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display = "flex";
    resultBox.style.display = "flex";

}

function goPageThree(){
    pageOne.style.display = "none";
    pageTwo.style.display = "flex";
    pageThree.style.display = "none";
    resultBox.style.display = "none";

}

//-====================================
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";


// Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    try {
      // If output has '%', replace with '/100' before evaluating.
      output = eval(output.replace("%", "/100"));
    } catch (e) {
      output = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    // If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button.value);
  });
});



//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


//================================================================================================
//algebra calculator
// Get the form and result elements
const form = document.getElementById('line-form');
const result = document.getElementById('lineIt');
const submit = document.getElementById('slopeBtn')

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form data
  const x1 = parseFloat(form.elements['xSubOne'].value);
  const y1 = parseFloat(form.elements['ySubOne'].value);
  const x2 = parseFloat(form.elements['xSubTwo'].value);
  const y2 = parseFloat(form.elements['ySubTwo'].value);

  // Calculate the line equation
  const equation = calculateLineEquation(x1, y1, x2, y2);

  // Display the result
  result.textContent = `The equation when converted to slope-intercept form is ${equation}`;
});

// The calculateLineEquation function from the previous example
function calculateLineEquation(x1, y1, x2, y2) {
  // Calculate the slope (m)
  let m = (y2 - y1) / (x2 - x1);

  // Calculate the y-intercept (b)
  let b = y1 - m * x1;

  // Return the equation of the line in the form y = mx + b
  return `y = ${m}x + ${b}`;
}

///===============================================================
function solveEquations() {
  const a1 = document.getElementById("a1").value;
  const b1 = document.getElementById("b1").value;
  const c1 = document.getElementById("c1").value;
  const a2 = document.getElementById("a2").value;
  const b2 = document.getElementById("b2").value;
  const c2 = document.getElementById("c2").value;

  const determinant = a1 * b2 - a2 * b1;
  if (determinant === 0) {
    document.getElementById("nigga").innerText = "The equations are parallel.";
    return;
  }

  const x = (c1 * b2 - c2 * b1) / determinant;
  const y = (a1 * c2 - a2 * c1) / determinant;

  document.getElementById("nigga").innerText = `x = ${x}, y = ${y}`;
}