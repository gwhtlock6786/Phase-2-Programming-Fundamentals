/*
 * Day 22 Practice: Grade Calculator
 *
 * LEARNING GOALS:
 * - Use if/else if/else conditionals
 * - Practice comparison operators (>=, <)
 * - Return string values from functions
 *
 * CONTEXT:
 * You're building a grade calculator that converts numeric scores
 * into letter grades. This is similar to how restaurants rate
 * health inspections (A, B, C grades).
 *
 * GRADING SCALE:
 * A: 90-100
 * B: 80-89
 * C: 70-79
 * D: 60-69
 * F: Below 60
 *
 * INSTRUCTIONS:
 * Complete the getLetterGrade function using if/else if/else
 */

// ========================================
// TODO: Complete the Grade Calculator
// ========================================

/**
 * Convert a numeric score to a letter grade
 *
 * @param {number} score - The numeric score (0-100)
 * @returns {string} - The letter grade (A, B, C, D, or F)
 *
 * EXAMPLES:
 * getLetterGrade(95) should return "A"
 * getLetterGrade(82) should return "B"
 * getLetterGrade(55) should return "F"
 */

function getLetterGrade(score) {
  // TODO: Use if/else if/else to check the score ranges

  // HINT: Check from highest to lowest
  // if (score >= 90) {
  //   return "A";
  // }
  // else if (... your turn ...)

  // ========================================
  // SOLUTION
  // ========================================

  // Check if the score is 90 or higher.
  // If this condition is true, return the letter grade "A".
  if (score >= 90) {
    return "A";
  }

  // If the first condition was false, check if the score is 80 or higher.
  // Since scores of 90+ have already been handled,
  // this represents the range of 80-89.
  else if (score >= 80) {
    return "B";
  }

  // If the score was not an A or B,
  // check if it is 70 or higher (70-79).
  else if (score >= 70) {
    return "C";
  }

  // If the score was not an A, B, or C,
  // check if it is 60 or higher (60-69).
  else if (score >= 60) {
    return "D";
  }

  // If none of the previous conditions were true,
  // the score must be below 60, so return an F.
  else {
    return "F";
  }
}

// ========================================
// TEST CASES (DO NOT MODIFY)
// ========================================

console.log("=== GRADE CALCULATOR TESTS ===\n");

// Test perfect score
console.log("Test 1: Perfect Score");
console.log("Score: 100");

// Call the function and store the returned grade.
let grade1 = getLetterGrade(100);

// Display the returned grade.
console.log("Grade:", grade1);

// Display the expected answer.
console.log("Expected: A");

// Compare the returned value to the expected value.
// If they match, display a checkmark.
// Otherwise, display an X.
console.log("Pass:", grade1 === "A" ? "✓" : "✗");

// Test each grade boundary
console.log("\nTest 2: A Grade (Minimum)");
console.log("Score: 90");

// Call the function using the minimum A score.
let grade2 = getLetterGrade(90);

// Display the returned grade.
console.log("Grade:", grade2);

// Display the expected result.
console.log("Expected: A");

// Verify the function returned the correct value.
console.log("Pass:", grade2 === "A" ? "✓" : "✗");

console.log("\nTest 3: B Grade (Middle)");
console.log("Score: 85");

// Store the returned B grade.
let grade3 = getLetterGrade(85);

// Display the result.
console.log("Grade:", grade3);

// Expected answer.
console.log("Expected: B");

// Verify the result.
console.log("Pass:", grade3 === "B" ? "✓" : "✗");

console.log("\nTest 4: C Grade");
console.log("Score: 72");

// Store the returned C grade.
let grade4 = getLetterGrade(72);

// Display the returned grade.
console.log("Grade:", grade4);

// Display the expected grade.
console.log("Expected: C");

// Check if the function works correctly.
console.log("Pass:", grade4 === "C" ? "✓" : "✗");

console.log("\nTest 5: D Grade");
console.log("Score: 65");

// Store the returned D grade.
let grade5 = getLetterGrade(65);

// Display the result.
console.log("Grade:", grade5);

// Expected value.
console.log("Expected: D");

// Compare the actual and expected values.
console.log("Pass:", grade5 === "D" ? "✓" : "✗");

console.log("\nTest 6: F Grade");
console.log("Score: 45");

// Store the returned F grade.
let grade6 = getLetterGrade(45);

// Display the result.
console.log("Grade:", grade6);

// Display expected value.
console.log("Expected: F");

// Verify the result.
console.log("Pass:", grade6 === "F" ? "✓" : "✗");

// Edge cases
console.log("\nTest 7: Edge Case (B/C Boundary)");
console.log("Score: 80");

// Test the exact boundary between C and B.
let grade7 = getLetterGrade(80);

// Display the returned grade.
console.log("Grade:", grade7);

// Display expected result.
console.log("Expected: B");

// Verify the function handled the boundary correctly.
console.log("Pass:", grade7 === "B" ? "✓" : "✗");

console.log("\nTest 8: Edge Case (C/D Boundary)");
console.log("Score: 70");

// Test the exact boundary between D and C.
let grade8 = getLetterGrade(70);

// Display the returned grade.
console.log("Grade:", grade8);

// Expected value.
console.log("Expected: C");

// Verify the result.
console.log("Pass:", grade8 === "C" ? "✓" : "✗");

// Multiple scores scenario
console.log("\n=== CLASS GRADES ===");

// Create an array of student objects.
// Each object contains a student's name and score.
let students = [
  { name: "Alex", score: 92 },
  { name: "Jordan", score: 78 },
  { name: "Sam", score: 88 },
  { name: "Taylor", score: 55 },
  { name: "Casey", score: 95 },
];

// Loop through every student in the array.
for (let i = 0; i < students.length; i++) {
  // Store the current student object.
  let student = students[i];

  // Calculate the student's letter grade.
  let letterGrade = getLetterGrade(student.score);

  // Display the student's information.
  console.log(student.name + ": " + student.score + " → Grade " + letterGrade);
}

/*
 * WHEN YOU'RE DONE:
 * All tests should show ✓ (checkmark)
 *
 * COMMON MISTAKES TO AVOID:
 * - Using < instead of <= or >= incorrectly
 * - Wrong order of if/else (always check highest values first)
 * - Forgetting the final "else" for F grades
 * - Using = instead of === (= is assignment, === is comparison)
 *
 * KEY CONCEPTS:
 * - if/else if chains check conditions in order
 * - First TRUE condition wins - rest are skipped
 * - Use >= for "or higher" ranges
 * - Always have a final "else" as catch-all
 *
 * WHY THIS WORKS:
 * 1. The function checks the highest grades first.
 * 2. As soon as one condition is true, JavaScript immediately returns
 *    the corresponding letter grade and exits the function.
 * 3. The remaining conditions are skipped because only one grade
 *    can be returned.
 * 4. The final else acts as the "catch-all" for every score below 60.
 *
 * CHALLENGE (Optional):
 * Add plus/minus grades:
 * - A (93-100), A- (90-92)
 * - B+ (87-89), B (83-86), B- (80-82)
 * - C+ (77-79), C (73-76), C- (70-72)
 * - D+ (67-69), D (63-66), D- (60-62)
 * - F (below 60)
 *
 * Create a new function called getDetailedGrade(score) that returns
 * the grade with plus/minus notation.
 */
