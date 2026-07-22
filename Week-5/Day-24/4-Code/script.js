// <!-- Students add their JavaScript code here -->

// ===========================================
// DAY 24 CALCULATOR PROJECT
// TODO: Complete the calculator functionality!
// ===========================================

// ===========================================
// STEP 1: Create state variables
// ===========================================

// currentNumber stores the number the user is currently typing.
// We use a string because calculator displays work with text.
let currentNumber = "0";

// previousNumber stores the first number in a calculation.
// It starts as null because no number has been saved yet.
let previousNumber = null;

// operation stores the math operation selected by the user.
// Examples: +, -, *, /
let operation = null;

// ===========================================
// STEP 2: Create updateDisplay function
// ===========================================

// This function updates what appears on the calculator screen.
//
// The value parameter is the text we want to display.
function updateDisplay(value) {
  // Find the HTML element with the id "display"
  const display = document.getElementById("display");

  // Change the text inside the display box.
  display.textContent = value;
}

// ===========================================
// STEP 3: Create handleNumber function
// ===========================================

// This function runs whenever a number button is clicked.
//
// The num parameter represents the number the user clicked.
function handleNumber(num) {
  // Check if the current display is 0
  // OR if there was an error from a previous calculation.
  if (currentNumber === "0" || currentNumber === "Error") {
    // Replace the current number with the new number.
    currentNumber = num;
  } else {
    // Otherwise, add the new number to the end.
    //
    // Example:
    // currentNumber = "2"
    // num = "5"
    //
    // Result:
    // currentNumber = "25"
    currentNumber += num;
  }

  // Update the calculator display.
  updateDisplay(currentNumber);
}

// ===========================================
// STEP 4: Create handleOperation function
// ===========================================

// This function handles when the user clicks
// an operation button (+, -, *, /).
//
// The op parameter stores the operation selected.
function handleOperation(op) {
  // If there is no previous number saved yet...
  if (previousNumber === null) {
    // Save the current number as the first number.
    previousNumber = currentNumber;
  }

  // If there is already an operation selected...
  else if (operation !== null) {
    // Calculate the previous operation first.
    previousNumber = calculate();

    // Show the result on the display.
    updateDisplay(previousNumber);
  }

  // Store the new operation.
  operation = op;

  // Reset currentNumber so the user can type
  // the next number.
  currentNumber = "0";
}

// ===========================================
// STEP 5: Create calculate function
// ===========================================

// This function performs the actual math calculation.
function calculate() {
  // Convert the saved numbers from strings into numbers.
  const firstNumber = parseFloat(previousNumber);

  const secondNumber = parseFloat(currentNumber);

  // Variable to store the answer.
  let result;

  // Check which operation the user selected.

  if (operation === "+") {
    // Addition
    result = firstNumber + secondNumber;
  } else if (operation === "-") {
    // Subtraction
    result = firstNumber - secondNumber;
  } else if (operation === "*") {
    // Multiplication
    result = firstNumber * secondNumber;
  } else if (operation === "/") {
    // Prevent dividing by zero.
    if (secondNumber === 0) {
      // Return an error message.
      return "Error";
    }

    // Division
    result = firstNumber / secondNumber;
  }

  // Convert the answer to a string.
  //
  // toFixed(2) rounds the number to 2 decimal places.
  //
  // Example:
  // 10 / 3 becomes 3.33
  return result.toFixed(2);
}

// ===========================================
// STEP 6: Create clearCalculator function
// ===========================================

// This function resets the calculator back to default.
function clearCalculator() {
  // Reset the current number.
  currentNumber = "0";

  // Remove the saved previous number.
  previousNumber = null;

  // Remove the selected operation.
  operation = null;

  // Reset the display.
  updateDisplay("0");
}

// ===========================================
// STEP 7: Add event listeners to number buttons
// ===========================================

// Select all buttons with the class "number".
const numberButtons = document.querySelectorAll(".number");

// Loop through every number button.
numberButtons.forEach(function (button) {
  // Add a click event listener.
  button.addEventListener("click", function () {
    // Get the number stored inside data-value.
    //
    // Example:
    // <button data-value="7">
    //
    // Returns:
    // "7"
    const number = this.getAttribute("data-value");

    // Send the number to our function.
    handleNumber(number);
  });
});

// ===========================================
// STEP 8: Add event listeners to operation buttons
// ===========================================

// Select all operation buttons.
const operationButtons = document.querySelectorAll(".operation");

// Loop through each operation button.
operationButtons.forEach(function (button) {
  // Add click listener.
  button.addEventListener("click", function () {
    // Get the operation symbol.
    //
    // Example:
    // data-value="+"
    //
    // Returns:
    // "+"
    const op = this.getAttribute("data-value");

    // Send the operation to the handler function.
    handleOperation(op);
  });
});

// ===========================================
// STEP 9: Add event listener to equals button
// ===========================================

// Select the equals button.
const equalsButton = document.getElementById("equals");

// Add click event listener.
equalsButton.addEventListener("click", function () {
  // Only calculate if:
  // 1. An operation exists
  // 2. A previous number exists
  if (operation !== null && previousNumber !== null) {
    // Perform the calculation.
    const result = calculate();

    // Store the result as the current number.
    currentNumber = result;

    // Display the result.
    updateDisplay(result);

    // Reset previous number.
    previousNumber = null;

    // Reset operation.
    operation = null;
  }
});

// ===========================================
// STEP 10: Add event listener to clear button
// ===========================================

// Select the clear button.
const clearButton = document.getElementById("clear");

// When clicked, reset the calculator.
clearButton.addEventListener("click", function () {
  clearCalculator();
});

// ===========================================
// TESTING YOUR CALCULATOR
// ===========================================
//
// Once you complete all steps, test these calculations:
//
// 1. 25 + 10 = 35
// 2. 100 - 37 = 63
// 3. 12 * 8 = 96
// 4. 144 / 12 = 12
// 5. 50 / 0 = Error
// 6. Click C to clear after each test
