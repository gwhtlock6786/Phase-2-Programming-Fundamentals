/*
=========================================
Activity 3: forEach Loop Practice
Goal: Loop through arrays to display information.
=========================================
*/

// =========================================
// Select the HTML unordered list
// =========================================

// Select the <ul> element that will hold
// all of the menu items.
const menuList = document.getElementById("menu-list");

// =========================================
// Create an array of menu items
// =========================================

// This array stores six restaurant menu items.
// Each item includes the name and price.
const menuItems = [
  "Burger - $8.99",
  "Cheeseburger - $9.99",
  "Chicken Sandwich - $8.49",
  "French Fries - $3.49",
  "Caesar Salad - $7.99",
  "Chocolate Shake - $4.99",
];

// =========================================
// Display numbered menu in the console
// =========================================

// The forEach() method loops through every
// item in the array one at a time.
menuItems.forEach(function (menuItem, index) {
  // Display each menu item with a number.
  console.log(`${index + 1}. ${menuItem}`);
});

// =========================================
// Add menu items to the HTML page
// =========================================

// Loop through the menu items again.
menuItems.forEach(function (menuItem) {
  // Create a new <li> element.
  const listItem = document.createElement("li");

  // Place the menu item text inside the <li>.
  listItem.textContent = menuItem;

  // Add the <li> to the unordered list.
  menuList.appendChild(listItem);
});

// ======================================================
// TESTING SECTION
// These console.log statements verify every
// requirement from the activity.
// ======================================================

console.log("\n========== TESTING MENU DISPLAY ==========");

// ------------------------------------------
// Test 1 - Entire menu array
// ------------------------------------------
console.log("\nTest 1 - Menu Array");
console.log(menuItems);

// ------------------------------------------
// Test 2 - Total menu items
// ------------------------------------------
console.log("\nTest 2 - Total Menu Items");
console.log("Expected: 6");
console.log("Actual:", menuItems.length);

// ------------------------------------------
// Test 3 - Numbered console output
// ------------------------------------------
console.log("\nTest 3 - Numbered Menu");

menuItems.forEach(function (menuItem, index) {
  console.log(`${index + 1}. ${menuItem}`);
});

// ------------------------------------------
// Test 4 - First menu item
// ------------------------------------------
console.log("\nTest 4 - First Menu Item");
console.log("Expected: Burger - $8.99");
console.log("Actual:", menuItems[0]);

// ------------------------------------------
// Test 5 - Last menu item
// ------------------------------------------
console.log("\nTest 5 - Last Menu Item");
console.log("Expected: Chocolate Shake - $4.99");
console.log("Actual:", menuItems[menuItems.length - 1]);

// ------------------------------------------
// Test 6 - Verify HTML list exists
// ------------------------------------------
console.log("\nTest 6 - HTML List Exists");
console.log(menuList);

// ------------------------------------------
// Test 7 - Verify number of <li> elements
// ------------------------------------------
console.log("\nTest 7 - Number of List Items");
console.log("Expected: 6");
console.log("Actual:", menuList.children.length);

// ------------------------------------------
// Test 8 - Display each HTML list item
// ------------------------------------------
console.log("\nTest 8 - HTML List Contents");

for (let i = 0; i < menuList.children.length; i++) {
  console.log(menuList.children[i].textContent);
}

// ------------------------------------------
// Test 9 - Verify every menu item was added
// ------------------------------------------
console.log("\nTest 9 - Compare Array to HTML");

menuItems.forEach(function (menuItem, index) {
  console.log(
    `Array: ${menuItem} | HTML: ${menuList.children[index].textContent}`,
  );
});

console.log("\n========== ALL TESTS COMPLETE ==========");
