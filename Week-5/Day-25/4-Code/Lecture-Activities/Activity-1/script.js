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

  // ===========================================
  // REPEATED CODE NOT DRY
  // ===========================================
  // This display update happens multiple times
  // throughout the calculator.
  //
  // This could be moved into a helper function
  // that automatically updates after changes.
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

    // ===========================================
    // REPEATED CODE NOT DRY
    // ===========================================
    // Display updates happen in several places.
    // This repeated behavior could be handled
    // automatically by a display helper.
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
  // ===========================================
  // REPEATED CODE NOT DRY
  // ===========================================
  // parseFloat() is used repeatedly to convert
  // strings into numbers.
  //
  // This could be placed inside a helper function
  // called convertToNumber().
  const firstNumber = parseFloat(previousNumber);

  // ===========================================
  // REPEATED CODE NOT DRY
  // ===========================================
  // Another repeated parseFloat conversion.
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
      // ===========================================
      // REPEATED CODE NOT DRY
      // ===========================================
      // Error messages should ideally be stored
      // in one location or function.
      return "Error";
    }

    // Division
    result = firstNumber / secondNumber;
  }

  // Convert the answer to a string.
  return result.toFixed(2);
}

// ===========================================
// STEP 6: Create clearCalculator function
// ===========================================

// This function resets the calculator back to default.
function clearCalculator() {
  // ===========================================
  // REPEATED CODE NOT DRY
  // ===========================================
  // These reset values appear whenever the
  // calculator state needs to be cleared.
  currentNumber = "0";

  // ===========================================
  // REPEATED CODE NOT DRY
  // ===========================================
  // previousNumber is reset multiple times.
  previousNumber = null;

  // ===========================================
  // REPEATED CODE NOT DRY
  // ===========================================
  // operation is reset multiple times.
  operation = null;

  // ===========================================
  // REPEATED CODE NOT DRY
  // ===========================================
  // The display update pattern repeats.
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
    // ===========================================
    // REPEATED CODE NOT DRY
    // ===========================================
    // Getting data attributes is repeated again
    // for operation buttons below.
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
  button.addEventListener("click", function () {
    // ===========================================
    // REPEATED CODE NOT DRY
    // ===========================================
    // Same getAttribute() pattern as above.
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

equalsButton.addEventListener("click", function () {
  if (operation !== null && previousNumber !== null) {
    const result = calculate();

    currentNumber = result;

    // ===========================================
    // REPEATED CODE NOT DRY
    // ===========================================
    // Another repeated display update.
    updateDisplay(result);

    previousNumber = null;

    operation = null;
  }
});

// ===========================================
// STEP 10: Add event listener to clear button
// ===========================================

const clearButton = document.getElementById("clear");

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

/*
====================================================
ACTIVITY 1: IDENTIFY REPEATED CODE
====================================================

Goal:
Find repeated code sections that violate DRY principles.

DRY = Don't Repeat Yourself

Repeated code found:

----------------------------------------------------
1. DISPLAY UPDATES
----------------------------------------------------

Repeated code:

updateDisplay(value)


Locations:

1. handleNumber()
   Line:
   updateDisplay(currentNumber)


2. handleOperation()
   Line:
   updateDisplay(previousNumber)


3. clearCalculator()
   Line:
   updateDisplay("0")


4. equalsButton click event
   Line:
   updateDisplay(result)


Why this is repeated:

Multiple parts of the calculator manually update
the display.

Possible improvement:

Create a single function that handles all display
updates automatically.



----------------------------------------------------
2. NUMBER CONVERSIONS
----------------------------------------------------

Repeated code:

parseFloat()


Locations:

1. calculate()

const firstNumber = parseFloat(previousNumber);


2. calculate()

const secondNumber = parseFloat(currentNumber);



Why this is repeated:

Every time we need a number, we manually convert
the value from a string.

Possible improvement:

Create:

function convertToNumber(value){

    return parseFloat(value);

}



----------------------------------------------------
3. DATA ATTRIBUTE LOOKUPS
----------------------------------------------------

Repeated code:

this.getAttribute("data-value")


Locations:

1. Number button event listener

const number = this.getAttribute("data-value");


2. Operation button event listener

const op = this.getAttribute("data-value");



Why this is repeated:

Both buttons retrieve data from HTML attributes.

Possible improvement:

Create a reusable function:

function getButtonValue(button){

    return button.getAttribute("data-value");

}



----------------------------------------------------
4. RESETTING CALCULATOR STATE
----------------------------------------------------

Repeated code:

currentNumber = "0";

previousNumber = null;

operation = null;



Locations:

1. clearCalculator()

2. equals button after calculation



Why this is repeated:

Multiple places reset calculator variables.

Possible improvement:

Create:

function resetState(){

    currentNumber = "0";
    previousNumber = null;
    operation = null;

}



----------------------------------------------------
5. ERROR MESSAGE
----------------------------------------------------

Repeated code:

"Error"


Location:

calculate()

return "Error";



Why this is repeated:

Error messages should be stored in one place.

Possible improvement:

Create:

const ERROR_MESSAGE = "Error";



====================================================
SUMMARY OF REPEATED CODE FOUND
====================================================

1. updateDisplay()
   - handleNumber()
   - handleOperation()
   - clearCalculator()
   - equals button


2. parseFloat()
   - firstNumber conversion
   - secondNumber conversion


3. getAttribute("data-value")
   - number buttons
   - operation buttons


4. Calculator reset values
   - currentNumber = "0"
   - previousNumber = null
   - operation = null


5. Error messages
   - "Error"


====================================================
END OF ACTIVITY
====================================================
*/
