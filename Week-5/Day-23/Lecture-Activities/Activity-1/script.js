/*
==========================================
Day 23 Practice
Activity 1: Element Selection Practice
==========================================

Learning Goals
- Use getElementById()
- Use querySelector()
- Use querySelectorAll()
- Read text from HTML elements
*/

// ==========================================
// Select the h1 using its ID
// ==========================================

// Find the element whose id is "restaurant-name".
const restaurantHeading = document.getElementById("restaurant-name");

// Display the entire element.
console.log("Restaurant Heading:");
console.log(restaurantHeading);

// ==========================================
// Select the paragraph using its class
// ==========================================

// querySelector() returns the FIRST element
// that matches the CSS selector.
const tagline = document.querySelector(".tagline");

// Display the paragraph element.
console.log("\nRestaurant Tagline:");
console.log(tagline);

// ==========================================
// Select every menu item
// ==========================================

// querySelectorAll() returns ALL matching elements.
const menuItems = document.querySelectorAll(".menu-item");

// Display the NodeList.
console.log("\nMenu Items:");
console.log(menuItems);

// Display the total number of menu items.
console.log("Number of Menu Items:", menuItems.length);

// ==========================================
// Select the first menu item
// ==========================================

// Select the first element that has the class "menu-item".
const firstMenuItem = document.querySelector(".menu-item");

// Display its text.
console.log("\nFirst Menu Item:");
console.log(firstMenuItem.textContent);

// ==========================================
// BONUS
// Display every menu item
// ==========================================

console.log("\nComplete Menu:");

for (let i = 0; i < menuItems.length; i++) {
  console.log(i + 1 + ". " + menuItems[i].textContent);
}
