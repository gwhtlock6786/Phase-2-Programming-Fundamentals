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

  // ========================================
  // SOLUTION
  // ========================================

  // TODO: If age is 12 or under, return "child"

  // Check if the customer's age is 12 or younger.
  // If this condition is true, return "child".
  if (age <= 12) {
    return "child";
  }

  // TODO: If age is 13-17, return "teen"

  // If the customer is not a child,
  // check if they are 17 or younger.
  // Since ages 12 and below have already been handled,
  // this condition represents ages 13 through 17.
  else if (age <= 17) {
    return "teen";
  }

  // TODO: If age is 18-64, return "adult"

  // If the customer is not a child or teen,
  // check if they are 64 or younger.
  // This represents ages 18 through 64.
  else if (age <= 64) {
    return "adult";
  }

  // TODO: If age is 65 or over, return "senior"

  // If none of the previous conditions were true,
  // the customer must be 65 or older.
  else {
    return "senior";
  }
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

  // Call the checkAge function and store the returned category.
  let category = checkAge(age);

  // TODO: Calculate price based on category
  // HINT: Use if/else if with category variable
  // child: basePrice * 0.50
  // teen: basePrice * 0.75
  // adult: basePrice * 1.00
  // senior: basePrice * 0.80

  // If the customer is a child,
  // charge half of the regular price.
  if (category === "child") {
    return basePrice * 0.5;
  }

  // If the customer is a teen,
  // charge 75% of the regular price.
  else if (category === "teen") {
    return basePrice * 0.75;
  }

  // Adults pay full price.
  else if (category === "adult") {
    return basePrice * 1.0;
  }

  // Seniors receive a 20% discount,
  // so they pay 80% of the regular price.
  else {
    return basePrice * 0.8;
  }
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

let baseMenuPrice = 20.0;

console.log("Base menu price: $" + baseMenuPrice.toFixed(2) + "\n");

console.log("Test 9: Child pricing (age 10)");
let price1 = calculateMealPrice(10, baseMenuPrice);
console.log("Price: $" + price1.toFixed(2));
console.log("Expected: $10.00 (50% of base)");
console.log("Pass:", price1 === 10.0 ? "✓" : "✗");

console.log("\nTest 10: Teen pricing (age 15)");
let price2 = calculateMealPrice(15, baseMenuPrice);
console.log("Price: $" + price2.toFixed(2));
console.log("Expected: $15.00 (75% of base)");
console.log("Pass:", price2 === 15.0 ? "✓" : "✗");

console.log("\nTest 11: Adult pricing (age 30)");
let price3 = calculateMealPrice(30, baseMenuPrice);
console.log("Price: $" + price3.toFixed(2));
console.log("Expected: $20.00 (100% of base)");
console.log("Pass:", price3 === 20.0 ? "✓" : "✗");

console.log("\nTest 12: Senior pricing (age 70)");
let price4 = calculateMealPrice(70, baseMenuPrice);
console.log("Price: $" + price4.toFixed(2));
console.log("Expected: $16.00 (80% of base)");
console.log("Pass:", price4 === 16.0 ? "✓" : "✗");

// ========================================
// FAMILY DINNER SCENARIO
// ========================================

console.log("\n=== FAMILY DINNER SCENARIO ===\n");

let familyMembers = [
  { name: "Grandma", age: 72 },
  { name: "Dad", age: 45 },
  { name: "Mom", age: 42 },
  { name: "Teen", age: 16 },
  { name: "Child", age: 9 },
];

let menuPrice = 18.0;
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
console.log(
  "Average per person: $" + (totalBill / familyMembers.length).toFixed(2),
);

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

// ========================================
// CHALLENGE 1 SOLUTION
// ========================================

/**
 * Determine the pricing category with an infant category.
 *
 * @param {number} age - Customer's age.
 * @returns {string} - Age category.
 */
function checkAgeWithInfant(age) {
  // Check for infants first.
  if (age <= 2) {
    return "infant";
  }

  // Children are ages 3-12.
  else if (age <= 12) {
    return "child";
  }

  // Teens are ages 13-17.
  else if (age <= 17) {
    return "teen";
  }

  // Adults are ages 18-64.
  else if (age <= 64) {
    return "adult";
  }

  // Everyone else is a senior.
  else {
    return "senior";
  }
}

/**
 * Calculate meal price with infant pricing.
 *
 * @param {number} age
 * @param {number} basePrice
 * @returns {number}
 */
function calculateMealPriceWithInfant(age, basePrice) {
  // Determine the person's category.
  let category = checkAgeWithInfant(age);

  // Infants eat free.
  if (category === "infant") {
    return 0;
  }

  // Children pay half price.
  else if (category === "child") {
    return basePrice * 0.5;
  }

  // Teens pay 75%.
  else if (category === "teen") {
    return basePrice * 0.75;
  }

  // Adults pay full price.
  else if (category === "adult") {
    return basePrice;
  }

  // Seniors receive a 20% discount.
  else {
    return basePrice * 0.8;
  }
}

// ========================================
// CHALLENGE 2 SOLUTION
// ========================================

/**
 * Analyze a group of customers.
 *
 * @param {Array<number>} ages
 * @param {number} basePrice
 * @returns {Object}
 */
function analyzeCustomerGroup(ages, basePrice) {
  // Create an object to store statistics.
  let results = {
    totalCustomers: ages.length,
    infants: 0,
    children: 0,
    teens: 0,
    adults: 0,
    seniors: 0,
    totalBill: 0,
    adultPriceTotal: ages.length * basePrice,
    discountPercent: 0,
  };

  // Loop through every age in the array.
  for (let i = 0; i < ages.length; i++) {
    // Store the current age.
    let age = ages[i];

    // Determine the category.
    let category = checkAgeWithInfant(age);

    // Calculate this customer's meal price.
    let price = calculateMealPriceWithInfant(age, basePrice);

    // Add the price to the running total.
    results.totalBill += price;

    // Increase the appropriate category counter.
    if (category === "infant") {
      results.infants++;
    } else if (category === "child") {
      results.children++;
    } else if (category === "teen") {
      results.teens++;
    } else if (category === "adult") {
      results.adults++;
    } else {
      results.seniors++;
    }
  }

  // Calculate the overall discount compared to
  // everyone paying adult pricing.
  results.discountPercent =
    ((results.adultPriceTotal - results.totalBill) / results.adultPriceTotal) *
    100;

  // Return the completed statistics object.
  return results;
}

// ========================================
// CHALLENGE 3 SOLUTION
// ========================================

/**
 * Determine the age category with optional student pricing.
 *
 * @param {number} age
 * @param {boolean} hasStudentID
 * @returns {string}
 */
function checkAgeStudent(age, hasStudentID) {
  // Children
  if (age <= 12) {
    return "child";
  }

  // Teens
  else if (age <= 17) {
    return "teen";
  }

  // Student category
  else if (age >= 18 && age <= 22 && hasStudentID) {
    return "student";
  }

  // Adults
  else if (age <= 64) {
    return "adult";
  }

  // Seniors
  else {
    return "senior";
  }
}

/**
 * Calculate meal price including student discount.
 *
 * @param {number} age
 * @param {number} basePrice
 * @param {boolean} hasStudentID
 * @returns {number}
 */
function calculateMealPriceStudent(age, basePrice, hasStudentID) {
  // Determine the customer's category.
  let category = checkAgeStudent(age, hasStudentID);

  if (category === "child") {
    return basePrice * 0.5;
  } else if (category === "teen") {
    return basePrice * 0.75;
  }

  // Students receive a 10% discount.
  else if (category === "student") {
    return basePrice * 0.9;
  } else if (category === "adult") {
    return basePrice;
  } else {
    return basePrice * 0.8;
  }
}

// ========================================
// CHALLENGE TESTS
// ========================================

console.log("\n========================================");
console.log("CHALLENGE 1: INFANT CATEGORY");
console.log("========================================\n");

console.log("Age 1:", checkAgeWithInfant(1));
console.log("Expected: infant\n");

console.log("Age 5:", checkAgeWithInfant(5));
console.log("Expected: child\n");

console.log("Age 16:", checkAgeWithInfant(16));
console.log("Expected: teen\n");

console.log("Age 30:", checkAgeWithInfant(30));
console.log("Expected: adult\n");

console.log("Age 70:", checkAgeWithInfant(70));
console.log("Expected: senior\n");

console.log("Meal price for infant ($20 meal):");
console.log(calculateMealPriceWithInfant(2, 20));
console.log("Expected: 0\n");

console.log("========================================");
console.log("CHALLENGE 2: CUSTOMER GROUP ANALYSIS");
console.log("========================================\n");

let customerAges = [1, 5, 10, 15, 18, 25, 42, 67, 72];

let groupResults = analyzeCustomerGroup(customerAges, 20);

console.log(groupResults);

console.log("\nSummary");
console.log("------------------------");
console.log("Customers:", groupResults.totalCustomers);
console.log("Infants:", groupResults.infants);
console.log("Children:", groupResults.children);
console.log("Teens:", groupResults.teens);
console.log("Adults:", groupResults.adults);
console.log("Seniors:", groupResults.seniors);
console.log("Total Bill: $" + groupResults.totalBill.toFixed(2));
console.log("Adult Total: $" + groupResults.adultPriceTotal.toFixed(2));
console.log("Discount: " + groupResults.discountPercent.toFixed(2) + "%");

console.log("\n========================================");
console.log("CHALLENGE 3: STUDENT DISCOUNT");
console.log("========================================\n");

console.log("20-year-old WITH student ID");
console.log("Category:", checkAgeStudent(20, true));
console.log("Price: $" + calculateMealPriceStudent(20, 20, true).toFixed(2));
console.log("Expected Category: student");
console.log("Expected Price: $18.00\n");

console.log("20-year-old WITHOUT student ID");
console.log("Category:", checkAgeStudent(20, false));
console.log("Price: $" + calculateMealPriceStudent(20, 20, false).toFixed(2));
console.log("Expected Category: adult");
console.log("Expected Price: $20.00\n");

console.log("70-year-old");
console.log("Category:", checkAgeStudent(70, false));
console.log("Price: $" + calculateMealPriceStudent(70, 20, false).toFixed(2));
console.log("Expected Category: senior");
console.log("Expected Price: $16.00");
