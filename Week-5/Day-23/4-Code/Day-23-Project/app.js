// Mario's Pizzeria - Interactive Webpage
// Day 23: DOM Manipulation Practice

// ===========================================
// FEATURE 1: BUTTON CHANGES TEXT
// ===========================================

// TODO 1: Select the button with id="reveal-special"
// document.getElementById() finds an HTML element by its id.
const revealSpecialBtn = document.getElementById("reveal-special");

// TODO 2: Select the paragraph with id="special-text"
const specialText = document.getElementById("special-text");

// TODO 3: Add a click event listener to the button
// The code inside this function will run every time the button is clicked.
revealSpecialBtn.addEventListener("click", function () {
  // Change the text inside the paragraph.
  specialText.textContent =
    "Today's Special: Large Pepperoni Pizza - Only $12.99!";
});

// ===========================================
// FEATURE 2: INPUT DISPLAYS TEXT (LIVE)
// ===========================================

// TODO 4: Select the input field with id="name-input"
const nameInput = document.getElementById("name-input");

// TODO 5: Select the span with id="name-display"
const nameDisplay = document.getElementById("name-display");

// TODO 6: Add an 'input' event listener to the input field
// The "input" event fires every time the user types,
// deletes, or pastes text into the input.
nameInput.addEventListener("input", function () {
  // Read the current text inside the input box.
  const customerName = nameInput.value;

  // Update the span so it always matches what the user typed.
  nameDisplay.textContent = customerName;
});

// ===========================================
// FEATURE 3: COLOR PICKER BUTTONS
// ===========================================

// TODO 7: Select ALL buttons with class="theme-btn"
// querySelectorAll() returns a NodeList (similar to an array)
// containing every element that matches the selector.
const themeButtons = document.querySelectorAll(".theme-btn");

// TODO 8: Select the preview div with id="theme-preview"
const themePreview = document.getElementById("theme-preview");

// TODO 9: Loop through all theme buttons and add click listeners

// forEach() loops through each button in the NodeList.
themeButtons.forEach(function (button) {
  // Add a click listener to each button.
  button.addEventListener("click", function () {
    // Read the value stored in the button's data-color attribute.
    // Example:
    // <button data-color="red">
    const selectedColor = button.getAttribute("data-color");

    // Change the preview box's background color.
    themePreview.style.backgroundColor = selectedColor;
  });
});

// ===========================================
// FEATURE 4: SHOW/HIDE TOGGLE
// ===========================================

// TODO 10: Select the toggle button with id="toggle-info"
const toggleInfoBtn = document.getElementById("toggle-info");

// TODO 11: Select the content div with id="info-content"
const infoContent = document.getElementById("info-content");

// TODO 12: Add click listener to toggle button
toggleInfoBtn.addEventListener("click", function () {
  // Check if the content is currently hidden.
  if (
    infoContent.style.display === "none" ||
    infoContent.style.display === ""
  ) {
    // Show the hidden content.
    infoContent.style.display = "block";

    // Change the button text.
    toggleInfoBtn.textContent = "Hide Hours";
  } else {
    // Hide the content again.
    infoContent.style.display = "none";

    // Change the button text back.
    toggleInfoBtn.textContent = "Show Hours";
  }
});

// ===========================================
// FEATURE 5: COUNTER WITH +/- BUTTONS
// ===========================================

// TODO 13: Create a variable to track the guest count (start at 2)

// let is used because the value will change.
let guestCount = 2;

// TODO 14: Select the increase button with id="increase"
const increaseBtn = document.getElementById("increase");

// TODO 15: Select the decrease button with id="decrease"
const decreaseBtn = document.getElementById("decrease");

// TODO 16: Select the display span with id="guest-count"
const guestCountDisplay = document.getElementById("guest-count");
//Bonus - display guest toal on result line
const totalGuestMessage = document.getElementById("guest-total");

// Display the starting value when the page loads.
guestCountDisplay.textContent = guestCount;

// TODO 17: Add click listener to increase button
increaseBtn.addEventListener("click", function () {
  // Increase the guest count by one.
  guestCount++;

  // Update the number shown on the webpage.
  updateGuestInfo();
});

// TODO 18: Add click listener to decrease button
decreaseBtn.addEventListener("click", function () {
  // Prevent the count from going below 1.
  if (guestCount > 1) {
    // Decrease the guest count.
    guestCount--;

    // Update the display.
    updateGuestInfo();
  }
});

function updateGuestInfo() {
  guestCountDisplay.textContent = guestCount;

  totalGuestMessage.innerHTML = `<em>guests in party</em> = ${guestCount}`;
}

// ===========================================
// TESTING CHECKLIST
// ===========================================
// Test each feature:
//
// [✓] Feature 1: Button reveals special text
// [✓] Feature 2: Typing in input shows live in display
// [✓] Feature 3: All 3 color buttons change preview box
// [✓] Feature 4: Toggle shows/hides hours
// [✓] Feature 5: +/- buttons change guest count
