/*
 * Day 22 Practice: Tip Calculator
 *
 * LEARNING GOALS:
 * - Create functions with parameters and return values
 * - Use arithmetic operations
 * - Practice returning calculated values
 *
 * RESTAURANT CONTEXT:
 * You're building a tip calculator to help customers figure out
 * how much to tip and how to split bills.
 *
 * INSTRUCTIONS:
 * Complete the three functions below. Each function should:
 * 1. Calculate the correct value
 * 2. Return the result (not console.log it)
 * 3. Work with the test cases at the bottom
 */

// ========================================
// TODO 1: Calculate Tip Amount
// ========================================

/**
 * Calculate the tip amount based on bill and tip percentage
 *
 * @param {number} billAmount - The total bill amount
 * @param {number} tipPercent - The tip percentage (0.15 = 15%, 0.20 = 20%)
 * @returns {number} - The tip amount
 *
 * EXAMPLE:
 * calculateTip(100.00, 0.20) should return 20.00
 * calculateTip(50.00, 0.15) should return 7.50
 */

function calculateTip(billAmount, tipPercent) {
  // TODO: Calculate tip = billAmount * tipPercent
  // TODO: Return the tip amount

  return billAmount * tipPercent;
}

// ========================================
// TODO 2: Calculate Total with Tip
// ========================================

/**
 * Calculate the total bill including tip
 *
 * @param {number} billAmount - The original bill amount
 * @param {number} tipPercent - The tip percentage (0.15 = 15%, 0.20 = 20%)
 * @returns {number} - The total amount (bill + tip)
 *
 * EXAMPLE:
 * calculateTotal(100.00, 0.20) should return 120.00
 * calculateTotal(50.00, 0.15) should return 57.50
 *
 * HINT: You can use the calculateTip function you just wrote!
 *       calculateTip(billAmount, tipPercent) gives you the tip amount
 */

function calculateTotal(billAmount, tipPercent) {
  // TODO: Get the tip amount using calculateTip function
  // TODO: Calculate total = billAmount + tip
  // TODO: Return the total

  return calculateTip(billAmount, tipPercent) + billAmount;
}

// ========================================
// TODO 3: Split Bill Among People
// ========================================

/**
 * Split the total bill (including tip) among multiple people
 *
 * @param {number} totalAmount - The total bill including tip
 * @param {number} numberOfPeople - How many people to split among
 * @returns {number} - Amount each person pays
 *
 * EXAMPLE:
 * splitBill(120.00, 4) should return 30.00
 * splitBill(57.50, 2) should return 28.75
 *
 * HINT: Division! Each person pays totalAmount / numberOfPeople
 */

function splitBill(totalAmount, numberOfPeople) {
  // TODO: Calculate amount per person = totalAmount / numberOfPeople
  // TODO: Return the amount per person

  return totalAmount / numberOfPeople;
}

// ========================================
// TEST CASES (DO NOT MODIFY)
// ========================================

console.log("=== TIP CALCULATOR TESTS ===\n");

// Test 1: Calculate tip for $50 bill with 20% tip
console.log("Test 1: Tip Calculation");
console.log("Bill: $50.00, Tip: 20%");
let tip1 = calculateTip(50.0, 0.2);
console.log("Tip amount: $" + tip1.toFixed(2));
console.log("Expected: $10.00");
console.log("Pass:", tip1 === 10.0 ? "✓" : "✗");

// Test 2: Calculate total for $75 bill with 18% tip
console.log("\nTest 2: Total Calculation");
console.log("Bill: $75.00, Tip: 18%");
let total1 = calculateTotal(75.0, 0.18);
console.log("Total: $" + total1.toFixed(2));
console.log("Expected: $88.50");
console.log("Pass:", total1 === 88.5 ? "✓" : "✗");

// Test 3: Split $100 bill among 4 people
console.log("\nTest 3: Split Bill");
console.log("Total: $100.00, People: 4");
let perPerson1 = splitBill(100.0, 4);
console.log("Per person: $" + perPerson1.toFixed(2));
console.log("Expected: $25.00");
console.log("Pass:", perPerson1 === 25.0 ? "✓" : "✗");

// Test 4: Complete scenario
console.log("\n=== COMPLETE SCENARIO ===");
console.log("Bill: $85.00");
console.log("Tip: 20%");
console.log("People: 3");

let bill = 85.0;
let tipPercent = 0.2;
let people = 3;

let tip = calculateTip(bill, tipPercent);
let total = calculateTotal(bill, tipPercent);
let eachPays = splitBill(total, people);

console.log("\nTip amount: $" + tip.toFixed(2));
console.log("Total with tip: $" + total.toFixed(2));
console.log("Each person pays: $" + eachPays.toFixed(2));

/*
 * WHEN YOU'RE DONE:
 * All tests should show ✓ (checkmark)
 *
 * COMMON MISTAKES TO AVOID:
 * - Forgetting to RETURN the value (just calculating isn't enough!)
 * - Using wrong variable names
 * - Forgetting to call calculateTip inside calculateTotal
 *
 * CHALLENGE (Optional):
 * Add a fourth function called getTipRecommendation(serviceQuality)
 * that returns different tip percentages based on service:
 * - "excellent" → 0.20 (20%)
 * - "good" → 0.18 (18%)
 * - "average" → 0.15 (15%)
 * - anything else → 0.10 (10%)
 */
