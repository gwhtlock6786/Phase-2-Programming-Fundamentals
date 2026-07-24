// ======================================================
// Activity 3: Reduce Practice
// Goal: Learn how to calculate values from arrays
// using the reduce() method.
// File: reduce-practice.js
// ======================================================

// ======================================================
// Starter Data
// ======================================================

// Daily restaurant sales totals
const dailySales = [245.5, 312.75, 198.25, 425.0, 289.5];

// Individual items from a customer order
const orderItems = [
  { name: "Burger", price: 10.99, quantity: 2 },
  { name: "Fries", price: 4.99, quantity: 2 },
  { name: "Drink", price: 2.5, quantity: 3 },
];

// Customer ratings from 1-5 stars
const ratings = [5, 4, 5, 3, 5, 4, 4, 5, 3, 4];

// ======================================================
// Exercise 1 - Calculate Total Weekly Sales
// ======================================================

// reduce() loops through every value in the array.
// accumulator stores the running total.
// currentSale represents the current number being processed.
//
// Starting value is 0.
const weeklySales = dailySales.reduce((total, currentSale) => {
  return total + currentSale;
}, 0);

// ======================================================
// Exercise 2 - Calculate Order Total
// ======================================================

// Each order item has:
// - price
// - quantity
//
// First calculate each item's subtotal:
// price * quantity
//
// Then add each subtotal together.
const orderTotal = orderItems.reduce((total, item) => {
  const itemTotal = item.price * item.quantity;

  return total + itemTotal;
}, 0);

// Round the order total to 2 decimal places.
const formattedOrderTotal = Number(orderTotal.toFixed(2));

// ======================================================
// Exercise 3 - Calculate Average Customer Rating
// ======================================================

// Step 1:
// Add all ratings together.
//
// Step 2:
// Divide the total by the number of ratings.
const totalRatings = ratings.reduce((total, rating) => {
  return total + rating;
}, 0);

// Calculate the average.
const averageRating = totalRatings / ratings.length;

// Round to one decimal place.
const formattedAverageRating = Number(averageRating.toFixed(1));

// ======================================================
// Exercise 4 - Count 5-Star Ratings
// ======================================================

// reduce() can also be used as a counter.
//
// If the rating equals 5:
// increase the count by 1.
//
// Otherwise:
// keep the same count.
const fiveStarCount = ratings.reduce((count, rating) => {
  if (rating === 5) {
    return count + 1;
  }

  return count;
}, 0);

// ======================================================
// Exercise 5 - Find Highest Daily Sales Amount
// ======================================================

// reduce() compares each sale against the current highest.
//
// If currentSale is larger:
// replace highest.
//
// Otherwise:
// keep highest.
const highestSales = dailySales.reduce((highest, currentSale) => {
  if (currentSale > highest) {
    return currentSale;
  }

  return highest;
}, 0);

// ======================================================
// Console Log Test Cases
// ======================================================

console.log("========================================");
console.log("Daily Sales:");
console.log(dailySales);

console.log("\nWeekly Sales Total:");
console.log(weeklySales.toFixed(2));

console.log("\nExpected:");
console.log("1471.00");

// ------------------------------------------------------

console.log("\n========================================");
console.log("Order Items:");
console.log(orderItems);

console.log("\nOrder Total:");
console.log(formattedOrderTotal);

console.log("\nExpected:");
console.log(39.46);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Customer Ratings:");
console.log(ratings);

console.log("\nAverage Rating:");
console.log(formattedAverageRating);

console.log("\nExpected:");
console.log(4.2);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Number of 5-Star Ratings:");
console.log(fiveStarCount);

console.log("\nExpected:");
console.log(4);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Highest Daily Sales:");
console.log(highestSales.toFixed(2));

console.log("\nExpected:");
console.log("425.00");

// ======================================================
// Verification Checks
// ======================================================

console.log("\n========================================");
console.log("Verification Checks");

console.log("Weekly Sales Correct:", weeklySales === 1471);

console.log("Order Total Correct:", formattedOrderTotal === 39.46);

console.log("Average Rating Correct:", formattedAverageRating === 4.2);

console.log("5-Star Count Correct:", fiveStarCount === 4);

console.log("Highest Sales Correct:", highestSales === 425);

console.log("========================================");
