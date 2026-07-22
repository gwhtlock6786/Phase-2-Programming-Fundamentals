// ======================================================
// Activity 3
// Style Changes and Toggle Features
// ======================================================

// ======================================================
// FEATURE 1
// Color Picker
// ======================================================

// Select each color button
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const greenBtn = document.getElementById("greenBtn");

// Select the color box that will change colors
const colorBox = document.getElementById("colorBox");

// ------------------------------------------------------
// RED BUTTON
// ------------------------------------------------------

// Listen for a click on the red button
redBtn.addEventListener("click", function () {
  // Change the background color of the box
  colorBox.style.backgroundColor = "red";
});

// ------------------------------------------------------
// BLUE BUTTON
// ------------------------------------------------------

blueBtn.addEventListener("click", function () {
  // Change the box color to blue
  colorBox.style.backgroundColor = "blue";
});

// ------------------------------------------------------
// GREEN BUTTON
// ------------------------------------------------------

greenBtn.addEventListener("click", function () {
  // Change the box color to green
  colorBox.style.backgroundColor = "green";
});

// ======================================================
// FEATURE 2
// Show / Hide Business Hours
// ======================================================

// Select the toggle button
const toggleBtn = document.getElementById("toggleBtn");

// Select the hours section
const hoursBox = document.getElementById("hoursBox");

// ------------------------------------------------------
// Create a Boolean Variable
// ------------------------------------------------------

// A Boolean variable can only be true or false.
//
// false = hours are hidden
// true = hours are visible
//
let hoursVisible = false;

// ------------------------------------------------------
// Listen for Button Click
// ------------------------------------------------------

toggleBtn.addEventListener("click", function () {
  // If the hours are NOT visible...
  if (hoursVisible === false) {
    // Show the hours section
    hoursBox.style.display = "block";

    // Change the button text
    toggleBtn.textContent = "Hide Hours";

    // Update our Boolean variable
    hoursVisible = true;
  }

  // Otherwise...
  else {
    // Hide the hours section
    hoursBox.style.display = "none";

    // Change button text back
    toggleBtn.textContent = "Show Hours";

    // Update Boolean variable
    hoursVisible = false;
  }
});

// ======================================================
// End of Activity
// ======================================================
