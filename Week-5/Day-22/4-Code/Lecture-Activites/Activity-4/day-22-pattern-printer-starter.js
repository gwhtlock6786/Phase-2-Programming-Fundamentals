/*
 * Day 22 Practice: Pattern Printer
 *
 * LEARNING GOALS:
 * - Use nested for loops (loop inside a loop)
 * - Build strings by adding characters in a loop
 * - Visualize how inner loops work with outer loops
 *
 * WHAT IS A NESTED LOOP?
 * A loop inside another loop. The inner loop runs COMPLETELY
 * for each iteration of the outer loop.
 *
 * RESTAURANT CONTEXT:
 * Like seating arrangements:
 * - Outer loop = each row of tables (Row 1, Row 2, Row 3)
 * - Inner loop = chairs at each table (Chair 1, 2, 3, 4)
 * - For Row 1, place all 4 chairs, then move to Row 2
 *
 * EXAMPLE PATTERN (height = 4):
 * *
 * **
 * ***
 * ****
 *
 * INSTRUCTIONS:
 * Complete the printTriangle function to print a star triangle
 */

// ========================================
// TODO: Complete the Pattern Printer
// ========================================

/**
 * Print a right-aligned triangle pattern of stars
 *
 * @param {number} height - How many rows tall the triangle should be
 *
 * EXAMPLE: printTriangle(4) should print:
 * *
 * **
 * ***
 * ****
 *
 * HOW IT WORKS:
 * - Row 1: Print 1 star
 * - Row 2: Print 2 stars
 * - Row 3: Print 3 stars
 * - Row 4: Print 4 stars
 *
 * HINT: Use a nested loop!
 * - Outer loop controls which row (1 to height)
 * - Inner loop prints stars for that row (1 to current row number)
 */

function printTriangle(height) {
  // TODO: Outer loop - go through each row from 1 to height
  // HINT: for (let row = 1; row <= height; row++) { ... }

  // ========================================
  // SOLUTION
  // ========================================

  // Start the outer loop.
  // This loop controls the current row of the triangle.
  // It begins at row 1 and continues until it reaches the
  // value stored in the height parameter.
  for (let row = 1; row <= height; row++) {
    // TODO: Build a string to store stars for this row
    // HINT: let line = "";

    // Create an empty string.
    // This string will hold all of the stars for
    // the current row before it is printed.
    let line = "";

    // TODO: Inner loop - add stars for current row
    // HINT: for (let star = 1; star <= row; star++) { ... }
    //       line = line + "*";

    // Start the inner loop.
    // This loop controls how many stars appear on
    // the current row.
    //
    // Example:
    // Row 1 → loop runs 1 time
    // Row 2 → loop runs 2 times
    // Row 3 → loop runs 3 times
    for (let star = 1; star <= row; star++) {
      // Add one star to the line string.
      // Each time the inner loop runs,
      // another "*" is added.
      line = line + "*";
    }

    // TODO: Print the line of stars
    // HINT: console.log(line);

    // Print the completed row of stars.
    console.log(line);
  }
}

// ========================================
// UNDERSTANDING NESTED LOOPS
// ========================================

console.log("=== Understanding Nested Loops ===\n");

console.log("Simple nested loop example:");
console.log("Outer loop runs 3 times, inner loop runs 2 times each\n");

for (let outer = 1; outer <= 3; outer++) {
  console.log("Outer loop: iteration", outer);

  for (let inner = 1; inner <= 2; inner++) {
    console.log("  Inner loop: iteration", inner);
  }
}

console.log("\nNotice: Inner loop runs COMPLETELY for each outer iteration!");
console.log("Total inner iterations: 3 outer × 2 inner = 6 times\n");

// ========================================
// TEST CASES (DO NOT MODIFY)
// ========================================

console.log("=== PATTERN TEST 1: Triangle Height 3 ===\n");
console.log("Expected:");
console.log("*");
console.log("**");
console.log("***");
console.log("\nYour output:");
printTriangle(3);

console.log("\n=== PATTERN TEST 2: Triangle Height 5 ===\n");
console.log("Expected:");
console.log("*");
console.log("**");
console.log("***");
console.log("****");
console.log("*****");
console.log("\nYour output:");
printTriangle(5);

console.log("\n=== PATTERN TEST 3: Triangle Height 8 ===\n");
printTriangle(8);

console.log("\n=== PATTERN TEST 4: Single Row ===\n");
printTriangle(1);

/*
 * WHEN YOU'RE DONE:
 * Your patterns should look like right-aligned triangles
 * Each row should have the correct number of stars
 *
 * COMMON MISTAKES TO AVOID:
 * - Not building the string before printing (printing star-by-star)
 * - Inner loop running to height instead of row number
 * - Forgetting to reset the line string for each row
 *
 * KEY CONCEPTS:
 * - NESTED LOOPS: Loop inside another loop
 * - Outer loop runs fewer times (controls rows)
 * - Inner loop runs more times (controls columns/stars per row)
 * - Inner loop runs COMPLETELY each time outer loop iterates
 * - Build strings character by character in loops
 *
 * HOW NESTED LOOPS WORK IN THIS PATTERN:
 * height = 4
 *
 * row=1: inner loop runs 1 time  → *
 * row=2: inner loop runs 2 times → **
 * row=3: inner loop runs 3 times → ***
 * row=4: inner loop runs 4 times → ****
 *
 * CHALLENGE 1 (Optional):
 * Create printSquare(size) that prints a square:
 * printSquare(4) →
 * ****
 * ****
 * ****
 * ****
 *
 * CHALLENGE 2 (Optional):
 * Create printInvertedTriangle(height) that prints upside-down:
 * printInvertedTriangle(4) →
 * ****
 * ***
 * **
 * *
 * HINT: Start with height stars, decrease by 1 each row
 *
 * CHALLENGE 3 (Optional):
 * Create printPyramid(height) that prints centered pyramid:
 * printPyramid(4) →
 *    *
 *   ***
 *  *****
 * *******
 * HINT: Add spaces before stars, odd number of stars per row
 *
 *
 */

// ========================================
// CHALLENGE 1 SOLUTION
// ========================================

/**
 * Print a square made of stars.
 *
 * @param {number} size - The width and height of the square.
 *
 * Example:
 * printSquare(4)
 * ****
 * ****
 * ****
 * ****
 */
function printSquare(size) {
  // Loop through each row of the square.
  for (let row = 1; row <= size; row++) {
    // Create an empty string for the current row.
    let line = "";

    // Add stars until the row reaches the desired width.
    for (let column = 1; column <= size; column++) {
      line = line + "*";
    }

    // Print the completed row.
    console.log(line);
  }
}

// ========================================
// CHALLENGE 2 SOLUTION
// ========================================

/**
 * Print an upside-down triangle.
 *
 * @param {number} height - The number of rows.
 *
 * Example:
 * printInvertedTriangle(4)
 * ****
 * ***
 * **
 * *
 */
function printInvertedTriangle(height) {
  // Start with the maximum number of stars.
  // Decrease the number of stars each row.
  for (let row = height; row >= 1; row--) {
    // Create an empty string.
    let line = "";

    // Add the correct number of stars.
    for (let star = 1; star <= row; star++) {
      line = line + "*";
    }

    // Print the completed row.
    console.log(line);
  }
}

// ========================================
// CHALLENGE 3 SOLUTION
// ========================================

/**
 * Print a centered pyramid.
 *
 * @param {number} height - Number of rows.
 *
 * Example:
 * printPyramid(4)
 *    *
 *   ***
 *  *****
 * *******
 */
function printPyramid(height) {
  // Loop through each row.
  for (let row = 1; row <= height; row++) {
    // Start with an empty string.
    let line = "";

    // ========================================
    // Add leading spaces
    // ========================================

    // The first row needs the most spaces.
    // Each new row needs one fewer space.
    for (let space = 1; space <= height - row; space++) {
      line = line + " ";
    }

    // ========================================
    // Add stars
    // ========================================

    // Each row contains an odd number of stars.
    // Formula:
    // Row 1 = 1 star
    // Row 2 = 3 stars
    // Row 3 = 5 stars
    // Row 4 = 7 stars
    for (let star = 1; star <= row * 2 - 1; star++) {
      line = line + "*";
    }

    // Print the completed pyramid row.
    console.log(line);
  }
}

// ========================================
// CHALLENGE TESTS
// ========================================

console.log("\n=== CHALLENGE 1: PRINT SQUARE ===\n");

console.log("Expected:");
console.log("****");
console.log("****");
console.log("****");
console.log("****");

console.log("\nYour Output:");
printSquare(4);

console.log("\n===============================\n");

console.log("=== CHALLENGE 2: INVERTED TRIANGLE ===\n");

console.log("Expected:");
console.log("****");
console.log("***");
console.log("**");
console.log("*");

console.log("\nYour Output:");
printInvertedTriangle(4);

console.log("\n===============================\n");

console.log("=== CHALLENGE 3: CENTERED PYRAMID ===\n");

console.log("Expected:");
console.log("   *");
console.log("  ***");
console.log(" *****");
console.log("*******");

console.log("\nYour Output:");
printPyramid(4);

console.log("\n===============================\n");

// Additional Tests

console.log("=== ADDITIONAL TESTS ===\n");

console.log("Square (Size 6)");
printSquare(6);

console.log("\nInverted Triangle (Height 6)");
printInvertedTriangle(6);

console.log("\nCentered Pyramid (Height 6)");
printPyramid(6);

// ========================================
// BONUS: Visualize Restaurant Seating
// ========================================

console.log("\n=== BONUS: Restaurant Table Layout ===\n");

function printTableLayout(rows, tablesPerRow) {
  console.log("Restaurant Floor Plan:");
  console.log("(" + rows + " rows × " + tablesPerRow + " tables per row)\n");

  for (let row = 1; row <= rows; row++) {
    let layout = "Row " + row + ": ";

    for (let table = 1; table <= tablesPerRow; table++) {
      layout = layout + "[Table] ";
    }

    console.log(layout);
  }
}

printTableLayout(3, 4); // 3 rows, 4 tables per row

console.log("\n=== Employee Schedule Grid ===\n");

function printScheduleGrid(days, shiftsPerDay) {
  let dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  for (let day = 0; day < days; day++) {
    let schedule = dayNames[day] + ": ";

    for (let shift = 1; shift <= shiftsPerDay; shift++) {
      schedule = schedule + "[Shift" + shift + "] ";
    }

    console.log(schedule);
  }
}

printScheduleGrid(5, 3); // 5 days, 3 shifts per day

/*
 * NESTED LOOPS IN REAL PROGRAMMING:
 * - Processing 2D data (spreadsheets, game boards, seating charts)
 * - Comparing every item with every other item
 * - Creating patterns and layouts
 * - Multi-dimensional arrays (arrays of arrays)
 *
 * RESTAURANT USES:
 * - Table layout (rows × tables)
 * - Weekly schedule (days × shifts)
 * - Menu grid (categories × items)
 * - Seating chart (rows × seats)
 */
