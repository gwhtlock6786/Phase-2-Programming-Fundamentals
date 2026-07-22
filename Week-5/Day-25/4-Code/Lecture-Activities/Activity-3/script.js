// <!-- Students add their JavaScript code here -->

// ===========================================
// DAY 24 CALCULATOR PROJECT
// ACTIVITY 3: COMPLETE DRY REFACTORING
// ===========================================

// ===========================================
// DRY HELPER FUNCTION #1
// updateDisplay(value)
// ===========================================
//
// PURPOSE:
// Handles ALL display updates in one place.
//
// BEFORE DRY:
// display.textContent = value;
//
// appeared multiple times.
//
// NOW:
// Every display change uses this function.
//
// ===========================================

function updateDisplay(value) {
  // Find the calculator display element.
  const display = document.getElementById("display");

  // Update what the user sees.
  display.textContent = value;
}

// ===========================================
// DRY HELPER FUNCTION #2
// showError(message)
// ===========================================
//
// PURPOSE:
// Handles all calculator error messages.
//
// Instead of repeating:
// return "Error";
//
// We have one function responsible
// for displaying errors.
//
// ===========================================

function showError(message) {
  // Update the calculator display
  // with the error message.
  updateDisplay(message);

  // Return the same message
  // so calculations can store it.
  return message;
}

// ===========================================
// DRY HELPER FUNCTION #3
// convertToNumber(value)
// ===========================================
//
// PURPOSE:
// Converts strings into numbers.
//
// BEFORE DRY:
//
// parseFloat(previousNumber)
// parseFloat(currentNumber)
//
// appeared multiple times.
//
// NOW:
// We have one conversion function.
//
// ===========================================

function convertToNumber(value) {
  // Convert string value into a number.
  return parseFloat(value);
}

// ===========================================
// DRY HELPER FUNCTION #4
// resetCalculatorState()
// ===========================================
//
// PURPOSE:
// Resets all calculator variables.
//
// BEFORE DRY:
//
// currentNumber = "0";
// previousNumber = null;
// operation = null;
//
// appeared together repeatedly.
//
// ===========================================

function resetCalculatorState() {
  // Reset current number.
  currentNumber = "0";

  // Remove saved previous number.
  previousNumber = null;

  // Remove selected operation.
  operation = null;
}

// ===========================================
// DRY HELPER FUNCTION #5
// getButtonValue(button)
// ===========================================
//
// PURPOSE:
// Gets the data-value from buttons.
//
// BEFORE DRY:
//
// button.getAttribute("data-value")
//
// appeared multiple times.
//
// ===========================================

function getButtonValue(button) {
  // Return the value stored
  // inside the HTML data attribute.
  return button.getAttribute("data-value");
}

// ===========================================
// STATE VARIABLES
// ===========================================

let currentNumber = "0";

let previousNumber = null;

let operation = null;

// ===========================================
// HANDLE NUMBER INPUT
// ===========================================

function handleNumber(num) {
  if (currentNumber === "0" || currentNumber === "Error") {
    currentNumber = num;
  } else {
    currentNumber += num;
  }

  // ===========================================
  // DRY HELPER FUNCTION USED:
  // updateDisplay()
  // ===========================================
  //
  // Replaces:
  //
  // display.textContent = currentNumber;
  //
  updateDisplay(currentNumber);
}

// ===========================================
// HANDLE OPERATIONS
// ===========================================

function handleOperation(op) {
  if (previousNumber === null) {
    previousNumber = currentNumber;
  } else if (operation !== null) {
    previousNumber = calculate();

    // ===========================================
    // DRY HELPER FUNCTION USED:
    // updateDisplay()
    // ===========================================
    updateDisplay(previousNumber);
  }

  operation = op;

  currentNumber = "0";
}

// ===========================================
// CALCULATE FUNCTION
// ===========================================

function calculate() {
  // ===========================================
  // DRY HELPER FUNCTION USED:
  // convertToNumber()
  // ===========================================
  //
  // Replaces:
  // parseFloat(previousNumber)
  //
  const firstNumber = convertToNumber(previousNumber);

  // ===========================================
  // DRY HELPER FUNCTION USED:
  // convertToNumber()
  // ===========================================
  //
  // Replaces:
  // parseFloat(currentNumber)
  //
  const secondNumber = convertToNumber(currentNumber);

  let result;

  if (operation === "+") {
    result = firstNumber + secondNumber;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
  } else if (operation === "/") {
    if (secondNumber === 0) {
      // ===========================================
      // DRY HELPER FUNCTION USED:
      // showError()
      // ===========================================
      //
      // Replaces:
      // return "Error";
      //
      return showError("Error");
    }

    result = firstNumber / secondNumber;
  }

  return result.toFixed(2);
}

// ===========================================
// CLEAR CALCULATOR
// ===========================================

function clearCalculator() {
  // ===========================================
  // DRY HELPER FUNCTION USED:
  // resetCalculatorState()
  // ===========================================
  //
  // Replaces:
  //
  // currentNumber = "0";
  // previousNumber = null;
  // operation = null;
  //
  resetCalculatorState();

  // ===========================================
  // DRY HELPER FUNCTION USED:
  // updateDisplay()
  // ===========================================

  updateDisplay("0");
}

// ===========================================
// NUMBER BUTTON EVENTS
// ===========================================

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // ===========================================
    // DRY HELPER FUNCTION USED:
    // getButtonValue()
    // ===========================================
    //
    // Replaces:
    // this.getAttribute("data-value")
    //
    const number = getButtonValue(this);

    handleNumber(number);
  });
});

// ===========================================
// OPERATION BUTTON EVENTS
// ===========================================

const operationButtons = document.querySelectorAll(".operation");

operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // ===========================================
    // DRY HELPER FUNCTION USED:
    // getButtonValue()
    // ===========================================
    const op = getButtonValue(this);

    handleOperation(op);
  });
});

// ===========================================
// EQUALS BUTTON
// ===========================================

const equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", function () {
  if (operation !== null && previousNumber !== null) {
    const result = calculate();

    currentNumber = result;

    // ===========================================
    // DRY HELPER FUNCTION USED:
    // updateDisplay()
    // ===========================================

    updateDisplay(result);

    previousNumber = null;

    operation = null;
  }
});

// ===========================================
// CLEAR BUTTON EVENT
// ===========================================

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function () {
  clearCalculator();
});

/*
====================================================
ACTIVITY 3: COMPLETE DRY REFACTOR SUMMARY
====================================================


HELPER FUNCTIONS CREATED:

1. updateDisplay(value)

Purpose:
Handles all screen updates.


Used in:

- handleNumber()
- handleOperation()
- equals button
- clearCalculator()



----------------------------------------------------


2. showError(message)

Purpose:
Handles calculator errors.


Used in:

- Division by zero



----------------------------------------------------


3. convertToNumber(value)

Purpose:
Handles all string-to-number conversions.


Used in:

- calculate()
    firstNumber
    secondNumber



----------------------------------------------------


4. resetCalculatorState()

Purpose:
Resets calculator variables.


Used in:

- clearCalculator()



----------------------------------------------------


5. getButtonValue(button)

Purpose:
Gets button data values.


Used in:

- Number button events
- Operation button events



====================================================
FINAL DRY CHECKLIST
====================================================


[x] No repeated display update code

[x] No repeated parseFloat conversions

[x] No repeated button attribute lookup

[x] No repeated calculator reset code

[x] Error handling uses one function

[x] Each helper function has ONE responsibility

[x] Function names describe their purpose

[x] Calculator behavior remains unchanged



====================================================
GIT COMMIT

git add .

git commit -m "Refactor: apply DRY helper functions to calculator"


====================================================
END ACTIVITY 3
====================================================
*/
