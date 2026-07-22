// ===============================================
// Activity 2
// Content and Event Listener Practice
// ===============================================

// ===============================================
// TASK 1
// Show Today's Special
// ===============================================

// Select the button that will be clicked
const specialBtn = document.getElementById("specialBtn");

// Select the paragraph where the special offer will appear
const specialText = document.getElementById("specialText");

// Listen for a click on the button
specialBtn.addEventListener("click", function () {
  // Change the paragraph text
  specialText.textContent =
    "🎉 Today's Special: Buy one burger and get fries FREE!";
});

// ===============================================
// TASK 2
// Shopping Cart Counter
// ===============================================

// Select the Add Item button
const addItemBtn = document.getElementById("addItemBtn");

// Select the span that displays the cart count
const cartCount = document.getElementById("cartCount");

// Create a variable to store the number of items
let count = 0;

// Listen for button clicks
addItemBtn.addEventListener("click", function () {
  // Increase the count by one
  count++;

  // Update the text on the page
  cartCount.textContent = count;
});

// ===============================================
// TASK 3
// Live Welcome Message
// ===============================================

// Select the text input
const nameInput = document.getElementById("nameInput");

// Select the welcome message
const welcomeMessage = document.getElementById("welcomeMessage");

// Listen for every keystroke in the input box
nameInput.addEventListener("input", function () {
  // Get the text currently typed by the user
  const userName = nameInput.value;

  // Check if the user has entered any text
  if (userName === "") {
    // If empty, show the default message
    welcomeMessage.textContent = "Welcome!";
  } else {
    // Otherwise, personalize the greeting
    welcomeMessage.textContent = `Welcome, ${userName}!`;
  }
});

// ===============================================
// End of Activity
// ===============================================
