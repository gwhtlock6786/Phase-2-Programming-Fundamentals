// <!-- Students add their JavaScript code here -->

// ===========================================
// DAY 24 CALCULATOR PROJECT
// ACTIVITY 2: EXTRACT YOUR FIRST FUNCTION
// ===========================================

// ===========================================
// NEW HELPER FUNCTION
// ===========================================
//
// Activity Goal:
// Create a helper function for the most repeated
// code in our calculator.
//
// Before refactoring:
// We had this same code in multiple places:
//
// display.textContent = value;
//
// This violated the DRY principle:
// Don't Repeat Yourself.
//
// Now we create one reusable function that handles
// every display update.
//
// This function receives a value parameter because
// different parts of the calculator need to display
// different values.
//
// Examples:
// updateDisplay("25")
// updateDisplay("Error")
// updateDisplay("100")
//
// ===========================================

function updateDisplay(value) {
  // Find the calculator display element.
  const display = document.getElementById("display");

  // Update the text shown on the calculator.
  display.textContent = value;
}

// ===========================================
// STEP 1: Create state variables
// ===========================================

// Stores the number currently being typed.
let currentNumber = "0";

// Stores the first number in a calculation.
let previousNumber = null;

// Stores the selected operation.
let operation = null;

// ===========================================
// STEP 2: Create handleNumber function
// ===========================================

// Handles when a user clicks a number button.
function handleNumber(num) {
  // If the calculator is displaying 0
  // or an error message...
  if (currentNumber === "0" || currentNumber === "Error") {
    // Replace the current value.
    currentNumber = num;
  } else {
    // Add the new number to the end.
    currentNumber += num;
  }

  // ===========================================
  // NEW HELPER FUNCTION USED
  // ===========================================
  //
  // Before refactoring:
  //
  // const display = document.getElementById("display");
  // display.textContent = currentNumber;
  //
  // Now we call our reusable helper function.
  //
  updateDisplay(currentNumber);
}

// ===========================================
// STEP 3: Create handleOperation function
// ===========================================

// Handles +, -, *, /
function handleOperation(op) {
  if (previousNumber === null) {
    previousNumber = currentNumber;
  } else if (operation !== null) {
    previousNumber = calculate();

    // ===========================================
    // NEW HELPER FUNCTION USED
    // ===========================================
    //
    // Before refactoring:
    //
    // const display = document.getElementById("display");
    // display.textContent = previousNumber;
    //
    // Now we reuse updateDisplay().
    //
    updateDisplay(previousNumber);
  }

  // Save the operation.
  operation = op;

  // Reset current number for next input.
  currentNumber = "0";
}

// ===========================================
// STEP 4: Create calculate function
// ===========================================

function calculate() {
  // Convert strings into numbers.
  const firstNumber = parseFloat(previousNumber);

  const secondNumber = parseFloat(currentNumber);

  let result;

  if (operation === "+") {
    result = firstNumber + secondNumber;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
  } else if (operation === "/") {
    if (secondNumber === 0) {
      return "Error";
    }

    result = firstNumber / secondNumber;
  }

  return result.toFixed(2);
}

// ===========================================
// STEP 5: Create clearCalculator function
// ===========================================

// Resets calculator state.
function clearCalculator() {
  currentNumber = "0";

  previousNumber = null;

  operation = null;

  // ===========================================
  // NEW HELPER FUNCTION USED
  // ===========================================
  //
  // Before refactoring:
  //
  // const display = document.getElementById("display");
  // display.textContent = "0";
  //
  // Now the display update is handled by
  // our helper function.
  //
  updateDisplay("0");
}

// ===========================================
// STEP 6: Number Button Events
// ===========================================

// Select all number buttons.
const numberButtons = document.querySelectorAll(".number");

// Add click events to every number button.
numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get button value.
    const number = this.getAttribute("data-value");

    // Send value to number handler.
    handleNumber(number);
  });
});

// ===========================================
// STEP 7: Operation Button Events
// ===========================================

const operationButtons = document.querySelectorAll(".operation");

operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get operation symbol.
    const op = this.getAttribute("data-value");

    // Send operation to handler.
    handleOperation(op);
  });
});

// ===========================================
// STEP 8: Equals Button
// ===========================================

const equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", function () {
  if (operation !== null && previousNumber !== null) {
    const result = calculate();

    currentNumber = result;

    // ===========================================
    // NEW HELPER FUNCTION USED
    // ===========================================
    //
    // Before refactoring:
    //
    // const display = document.getElementById("display");
    // display.textContent = result;
    //
    // Now:
    //
    // One reusable function handles display changes.
    //
    updateDisplay(result);

    previousNumber = null;

    operation = null;
  }
});

// ===========================================
// STEP 9: Clear Button
// ===========================================

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function () {
  clearCalculator();
});

/*
====================================================
ACTIVITY 2 SUMMARY
====================================================


HELPER FUNCTION CREATED:

function updateDisplay(value)


WHY WAS IT CREATED?

The calculator had repeated code:

display.textContent = value;


This appeared in multiple locations.


BEFORE:

handleNumber()
    ↓
display.textContent


handleOperation()
    ↓
display.textContent


clearCalculator()
    ↓
display.textContent


equals button
    ↓
display.textContent



AFTER:

All locations now use:

updateDisplay(value)



BENEFITS:

✓ Less repeated code
✓ Easier to maintain
✓ Easier to debug
✓ Follows DRY principles
✓ Makes future changes faster


EXAMPLE:

If we want to change the display style later:

Before:
We would need to update 4 different places.


After:
We only update:

function updateDisplay(value)


====================================================
GIT COMMIT MESSAGE

After testing:

git add .

git commit -m "Refactor: extract updateDisplay function to reduce repetition"


====================================================
TESTING CHECKLIST

[✓] Addition works
[✓] Subtraction works
[✓] Multiplication works
[✓] Division works
[✓] Clear button works
[✓] Display updates correctly


====================================================
END ACTIVITY 2
====================================================
*/
