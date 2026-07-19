/*
 * Day 22 Practice: Age Eligibility Checker
 *
 * LEARNING GOALS:
 * - Use if/else if/else to check age ranges
 * - Return string values based on conditions
 * - Practice with real-world business logic
 *
 * RESTAURANT CONTEXT:
 * Restaurants have different pricing tiers based on customer age:
 * - Kids (under 13): Child meal pricing
 * - Teens (13-17): Teen pricing
 * - Adults (18-64): Regular adult pricing
 * - Seniors (65+): Senior discount pricing
 *
 * INSTRUCTIONS:
 * Complete the checkAge function to return the correct rate category
 */

// ========================================
// TODO: Complete the Age Checker Function
// ========================================

/**
 * Determine the pricing category based on customer age
 *
 * @param {number} age - The customer's age
 * @returns {string} - The rate category
 *
 * RULES:
 * - Age 0-12: Return "child"
 * - Age 13-17: Return "teen"
 * - Age 18-64: Return "adult"
 * - Age 65+: Return "senior"
 *
 * EXAMPLES:
 * checkAge(10) should return "child"
 * checkAge(16) should return "teen"
 * checkAge(30) should return "adult"
 * checkAge(70) should return "senior"
 */

function checkAge(age) {
  // TODO: Use if/else if/else to check age ranges
  // HINT: Check from youngest to oldest, or use specific ranges

  // TODO: If age is 12 or under, return "child"


  // TODO: If age is 13-17, return "teen"


  // TODO: If age is 18-64, return "adult"


  // TODO: If age is 65 or over, return "senior"


}

// ========================================
// BONUS TODO: Rate Calculator
// ========================================

/**
 * Calculate the meal price based on age
 *
 * @param {number} age - The customer's age
 * @param {number} basePrice - The regular adult menu price
 * @returns {number} - The adjusted price for this age group
 *
 * PRICING RULES:
 * - Child: 50% of base price
 * - Teen: 75% of base price
 * - Adult: 100% of base price (full price)
 * - Senior: 80% of base price (20% discount)
 *
 * EXAMPLE:
 * calculateMealPrice(10, 15.00) → 7.50 (child rate)
 * calculateMealPrice(70, 15.00) → 12.00 (senior rate)
 */

function calculateMealPrice(age, basePrice) {
  // TODO: Get the age category using checkAge function


  // TODO: Calculate price based on category
  // HINT: Use if/else if with category variable
  // child: basePrice * 0.50
  // teen: basePrice * 0.75
  // adult: basePrice * 1.00
  // senior: basePrice * 0.80


}

// ========================================
// TEST CASES (DO NOT MODIFY)
// ========================================

console.log("=== AGE CATEGORY TESTS ===\n");

// Test each category
console.log("Test 1: Child (age 8)");
let cat1 = checkAge(8);
console.log("Category:", cat1);
console.log("Expected: child");
console.log("Pass:", cat1 === "child" ? "✓" : "✗");

console.log("\nTest 2: Boundary - Child/Teen (age 12)");
let cat2 = checkAge(12);
console.log("Category:", cat2);
console.log("Expected: child");
console.log("Pass:", cat2 === "child" ? "✓" : "✗");

console.log("\nTest 3: Boundary - Child/Teen (age 13)");
let cat3 = checkAge(13);
console.log("Category:", cat3);
console.log("Expected: teen");
console.log("Pass:", cat3 === "teen" ? "✓" : "✗");

console.log("\nTest 4: Teen (age 16)");
let cat4 = checkAge(16);
console.log("Category:", cat4);
console.log("Expected: teen");
console.log("Pass:", cat4 === "teen" ? "✓" : "✗");

console.log("\nTest 5: Boundary - Teen/Adult (age 18)");
let cat5 = checkAge(18);
console.log("Category:", cat5);
console.log("Expected: adult");
console.log("Pass:", cat5 === "adult" ? "✓" : "✗");

console.log("\nTest 6: Adult (age 45)");
let cat6 = checkAge(45);
console.log("Category:", cat6);
console.log("Expected: adult");
console.log("Pass:", cat6 === "adult" ? "✓" : "✗");

console.log("\nTest 7: Boundary - Adult/Senior (age 65)");
let cat7 = checkAge(65);
console.log("Category:", cat7);
console.log("Expected: senior");
console.log("Pass:", cat7 === "senior" ? "✓" : "✗");

console.log("\nTest 8: Senior (age 80)");
let cat8 = checkAge(80);
console.log("Category:", cat8);
console.log("Expected: senior");
console.log("Pass:", cat8 === "senior" ? "✓" : "✗");

// ========================================
// MEAL PRICING TESTS
// ========================================

console.log("\n=== MEAL PRICING TESTS ===\n");

let baseMenuPrice = 20.00;

console.log("Base menu price: $" + baseMenuPrice.toFixed(2) + "\n");

console.log("Test 9: Child pricing (age 10)");
let price1 = calculateMealPrice(10, baseMenuPrice);
console.log("Price: $" + price1.toFixed(2));
console.log("Expected: $10.00 (50% of base)");
console.log("Pass:", price1 === 10.00 ? "✓" : "✗");

console.log("\nTest 10: Teen pricing (age 15)");
let price2 = calculateMealPrice(15, baseMenuPrice);
console.log("Price: $" + price2.toFixed(2));
console.log("Expected: $15.00 (75% of base)");
console.log("Pass:", price2 === 15.00 ? "✓" : "✗");

console.log("\nTest 11: Adult pricing (age 30)");
let price3 = calculateMealPrice(30, baseMenuPrice);
console.log("Price: $" + price3.toFixed(2));
console.log("Expected: $20.00 (100% of base)");
console.log("Pass:", price3 === 20.00 ? "✓" : "✗");

console.log("\nTest 12: Senior pricing (age 70)");
let price4 = calculateMealPrice(70, baseMenuPrice);
console.log("Price: $" + price4.toFixed(2));
console.log("Expected: $16.00 (80% of base)");
console.log("Pass:", price4 === 16.00 ? "✓" : "✗");

// ========================================
// FAMILY DINNER SCENARIO
// ========================================

console.log("\n=== FAMILY DINNER SCENARIO ===\n");

let familyMembers = [
  { name: "Grandma", age: 72 },
  { name: "Dad", age: 45 },
  { name: "Mom", age: 42 },
  { name: "Teen", age: 16 },
  { name: "Child", age: 9 }
];

let menuPrice = 18.00;
let totalBill = 0;

console.log("Base menu price: $" + menuPrice.toFixed(2) + "\n");

for (let i = 0; i < familyMembers.length; i++) {
  let member = familyMembers[i];
  let category = checkAge(member.age);
  let price = calculateMealPrice(member.age, menuPrice);

  console.log(member.name + " (age " + member.age + "):");
  console.log("  Category: " + category);
  console.log("  Price: $" + price.toFixed(2));

  totalBill = totalBill + price;
}

console.log("\n--- Family Total ---");
console.log("Total bill: $" + totalBill.toFixed(2));
console.log("Average per person: $" + (totalBill / familyMembers.length).toFixed(2));

/*
 * WHEN YOU'RE DONE:
 * All tests should show ✓ (checkmark)
 *
 * COMMON MISTAKES TO AVOID:
 * - Off-by-one errors (is 13 a child or teen? is 65 adult or senior?)
 * - Using < when you should use <= (or vice versa)
 * - Wrong order of conditions (checking adult before teen catches teens as adults)
 * - Forgetting to return a value
 *
 * KEY CONCEPTS:
 * - Boundary cases: Test the edges (12/13, 17/18, 64/65)
 * - Inclusive ranges: Use >= and <= for "or equal to"
 * - Age categories are mutually exclusive (one person = one category)
 * - Real business logic: These are actual pricing strategies restaurants use
 *
 * WHY THIS MATTERS:
 * - Real-world business rules in code
 * - Practice with boundary conditions
 * - Understanding how pricing systems work
 * - Category-based logic (very common in apps)
 *
 * CHALLENGE 1 (Optional):
 * Add a special "infant" category (age 0-2) that's free (price = 0)
 *
 * CHALLENGE 2 (Optional):
 * Create a function that takes an array of ages and returns:
 * - Total number of customers
 * - Count in each category
 * - Total bill for the group
 * - Discount percentage compared to all adult pricing
 *
 * CHALLENGE 3 (Optional):
 * Add "student" category (age 18-22 with student ID) that gets 10% off
 * Modify checkAge to accept a second parameter: hasStudentID (boolean)
 */
