/*
 * Day 22 Practice: FizzBuzz
 *
 * LEARNING GOALS:
 * - Use for loops to iterate through numbers
 * - Practice if/else conditionals inside loops
 * - Use the modulo operator (%) to check divisibility
 *
 * WHAT IS FIZZBUZZ?
 * FizzBuzz is a classic programming challenge. The rules:
 * - For numbers 1 to 100:
 *   - If divisible by 3, print "Fizz"
 *   - If divisible by 5, print "Buzz"
 *   - If divisible by BOTH 3 and 5, print "FizzBuzz"
 *   - Otherwise, print the number
 *
 * RESTAURANT CONTEXT:
 * Think of it like kitchen orders:
 * - Table 3, 6, 9, 12, 15... get "Fizz" (appetizer special)
 * - Table 5, 10, 15, 20... get "Buzz" (drink special)
 * - Table 15, 30, 45... get "FizzBuzz" (both specials!)
 *
 * MODULO OPERATOR (%):
 * number % divisor gives the REMAINDER of division
 * - 10 % 3 = 1 (10 ÷ 3 = 3 remainder 1)
 * - 15 % 3 = 0 (15 ÷ 3 = 5 remainder 0) ← No remainder = divisible!
 * - 15 % 5 = 0 (15 ÷ 5 = 3 remainder 0) ← No remainder = divisible!
 *
 * INSTRUCTIONS:
 * Complete the fizzbuzz function below
 */

// ========================================
// TODO: Complete the FizzBuzz Function
// ========================================

/**
 * Play FizzBuzz from 1 to maxNumber
 *
 * @param {number} maxNumber - The highest number to check (usually 100)
 *
 * RULES:
 * - If number is divisible by 3 AND 5: print "FizzBuzz"
 * - Else if number is divisible by 3: print "Fizz"
 * - Else if number is divisible by 5: print "Buzz"
 * - Else: print the number
 *
 * IMPORTANT: Check for divisibility by BOTH 3 and 5 FIRST!
 * Otherwise you'll print "Fizz" for 15 instead of "FizzBuzz"
 */

function fizzbuzz(maxNumber) {
  // TODO: Create a for loop from 1 to maxNumber
  // HINT: for (let i = 1; i <= maxNumber; i++) { ... }

  // ========================================
  // SOLUTION
  // ========================================

  // Start a loop at 1 and continue until the value
  // reaches maxNumber. The loop variable i represents
  // the current number being checked.
  for (let i = 1; i <= maxNumber; i++) {
    // TODO: Check if number is divisible by BOTH 3 and 5 first
    // HINT: if (i % 3 === 0 && i % 5 === 0) { ... }

    // Check if the current number is evenly divisible
    // by both 3 and 5.
    // The modulo operator (%) returns the remainder.
    // If both remainders are 0, print "FizzBuzz".
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }

    // TODO: Check if number is divisible by 3 only
    // HINT: else if (i % 3 === 0) { ... }

    // If the number is not divisible by both,
    // check if it is divisible only by 3.
    // If true, print "Fizz".
    else if (i % 3 === 0) {
      console.log("Fizz");
    }

    // TODO: Check if number is divisible by 5 only
    // HINT: else if (i % 5 === 0) { ... }

    // If the number is not divisible by 3,
    // check if it is divisible by 5.
    // If true, print "Buzz".
    else if (i % 5 === 0) {
      console.log("Buzz");
    }

    // TODO: Otherwise, print the number
    // HINT: else { ... }

    // If none of the previous conditions were true,
    // the number is not divisible by 3 or 5,
    // so print the number itself.
    else {
      console.log(i);
    }
  }
}

// ========================================
// UNDERSTANDING MODULO (%) OPERATOR
// ========================================

console.log("=== Understanding Modulo (%) ===\n");

// Calculate the remainder when 10 is divided by 3.
console.log("10 % 3 =", 10 % 3, "(10 ÷ 3 = 3 remainder 1)");

// 15 divided by 3 has no remainder, so it is divisible by 3.
console.log("15 % 3 =", 15 % 3, "(15 ÷ 3 = 5 remainder 0) ← divisible!");

// 15 divided by 5 also has no remainder, so it is divisible by 5.
console.log("15 % 5 =", 15 % 5, "(15 ÷ 5 = 3 remainder 0) ← divisible!");

// 16 divided by 5 leaves a remainder of 1.
console.log("16 % 5 =", 16 % 5, "(16 ÷ 5 = 3 remainder 1)");

console.log("\nIf remainder is 0, the number is divisible!");
console.log("Check: if (number % 3 === 0) → divisible by 3\n");

// ========================================
// TEST CASES (DO NOT MODIFY)
// ========================================

console.log("=== FIZZBUZZ TEST: Numbers 1-15 ===\n");

// Display what the output should look like.
console.log("Expected output:");
console.log(
  "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz\n",
);

// Run the student's function.
console.log("Your output:");
fizzbuzz(15);

// Test the function using numbers 1 through 30.
console.log("\n=== FIZZBUZZ TEST: Numbers 1-30 ===\n");
fizzbuzz(30);

// Test the complete challenge using numbers 1 through 100.
console.log("\n=== FULL FIZZBUZZ: Numbers 1-100 ===\n");
fizzbuzz(100);

/*
 * WHEN YOU'RE DONE:
 * Your output should match the expected output:
 * - 1, 2 (numbers)
 * - 3, 6, 9, 12 (Fizz)
 * - 5, 10, 20, 25 (Buzz)
 * - 15, 30, 45, 60, 75, 90 (FizzBuzz)
 *
 * COMMON MISTAKES TO AVOID:
 * - Checking divisibility by 3 or 5 before checking BOTH
 *   (This makes 15 print "Fizz" instead of "FizzBuzz")
 * - Using = instead of === for comparison
 * - Forgetting the loop (just checking one number)
 *
 * KEY CONCEPTS:
 * - Modulo (%) operator finds remainders
 * - If remainder is 0, number is divisible
 * - Check most specific condition first (both 3 and 5)
 * - Then check less specific conditions (just 3, just 5)
 *
 * WHY THIS SOLUTION WORKS:
 * - The for loop checks every number from 1 through maxNumber.
 * - The first if statement checks the most specific case:
 *   numbers divisible by BOTH 3 and 5.
 * - If that condition is false, JavaScript continues checking
 *   the remaining conditions.
 * - Only the first true condition executes because this is an
 *   if / else if / else chain.
 * - The final else catches every number that is not divisible
 *   by either 3 or 5.
 *
 * WHY IS FIZZBUZZ IMPORTANT?
 * - Tests your understanding of loops, conditionals, and logic
 * - Common interview question for entry-level developers
 * - Teaches importance of checking conditions in right order
 *
 * CHALLENGE (Optional):
 * Modify fizzbuzz to accept two parameters:
 * fizzbuzzCustom(maxNumber, divisor1, divisor2, word1, word2)
 *
 * Example:
 * fizzbuzzCustom(20, 2, 7, "Even", "Lucky")
 * Should print "Even" for multiples of 2, "Lucky" for multiples of 7,
 * and "EvenLucky" for multiples of both!
 */

// ========================================
// CHALLENGE SOLUTION
// ========================================

/**
 * Play a customizable version of FizzBuzz.
 *
 * @param {number} maxNumber - The highest number to count to.
 * @param {number} divisor1 - The first divisor to check.
 * @param {number} divisor2 - The second divisor to check.
 * @param {string} word1 - The word to print for divisor1.
 * @param {string} word2 - The word to print for divisor2.
 *
 * EXAMPLE:
 * fizzbuzzCustom(20, 2, 7, "Even", "Lucky")
 */

function fizzbuzzCustom(maxNumber, divisor1, divisor2, word1, word2) {
  // Loop from 1 through the maximum number.
  for (let i = 1; i <= maxNumber; i++) {
    // Check if the current number is divisible by BOTH divisors.
    // If both conditions are true, print both words together.
    if (i % divisor1 === 0 && i % divisor2 === 0) {
      console.log(word1 + word2);
    }

    // Otherwise, check if the number is divisible only by divisor1.
    // If so, print the first word.
    else if (i % divisor1 === 0) {
      console.log(word1);
    }

    // Otherwise, check if the number is divisible only by divisor2.
    // If so, print the second word.
    else if (i % divisor2 === 0) {
      console.log(word2);
    }

    // If none of the conditions are true,
    // print the number itself.
    else {
      console.log(i);
    }
  }
}

// ========================================
// TEST CASES
// ========================================

console.log("=== CUSTOM FIZZBUZZ EXAMPLE ===\n");

// Multiples of 2 print "Even"
// Multiples of 7 print "Lucky"
// Multiples of both print "EvenLucky"
fizzbuzzCustom(20, 2, 7, "Even", "Lucky");

console.log("\n=== ORIGINAL FIZZBUZZ USING CUSTOM FUNCTION ===\n");

// The original FizzBuzz can also be recreated
// by passing 3, 5, "Fizz", and "Buzz".
fizzbuzzCustom(30, 3, 5, "Fizz", "Buzz");
