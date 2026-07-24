// ==========================================================
// STORAGE HELPER FUNCTIONS PRACTICE
//
// Goal:
// Create reusable functions that safely save and load data
// using localStorage.
//
// These functions:
// - Convert data to JSON
// - Handle errors with try/catch
// - Return useful values
// ==========================================================

// ==========================================================
// FUNCTION 1:
// saveToStorage()
//
// Purpose:
// Safely save JavaScript data into localStorage.
//
// Parameters:
// key  -> name used to store the data
// data -> array, object, string, etc.
//
// Returns:
// true  -> if saved successfully
// false -> if something failed
// ==========================================================

function saveToStorage(key, data) {
  try {
    // Convert JavaScript data into JSON text
    //
    // Example:
    //
    // Object
    // {
    //   name:"John"
    // }
    //
    // becomes:
    //
    // '{"name":"John"}'
    //
    const jsonText = JSON.stringify(data);

    // Save the JSON string into localStorage
    localStorage.setItem(key, jsonText);

    // Tell the program saving worked
    return true;
  } catch (error) {
    // If anything fails,
    // display the error
    console.error("Save failed:", error.message);

    // Tell the program saving failed
    return false;
  }
}

// ==========================================================
// FUNCTION 2:
// loadFromStorage()
//
// Purpose:
// Safely retrieve data from localStorage.
//
// Parameters:
// key          -> saved data name
// defaultValue -> returned if no data exists
//
// Returns:
// Saved data OR default value
// ==========================================================

function loadFromStorage(key, defaultValue) {
  try {
    // Get saved JSON text
    const jsonText = localStorage.getItem(key);

    // Check if nothing was saved
    if (jsonText === null) {
      // Return fallback value
      return defaultValue;
    }

    // Convert JSON text back into JavaScript data
    return JSON.parse(jsonText);
  } catch (error) {
    // Handle errors without crashing
    console.error("Load failed:", error.message);

    // Return default value
    return defaultValue;
  }
}

// ==========================================================
// TESTING SECTION
//
// This verifies both helper functions work.
// ==========================================================

console.log("==============================");

console.log("STORAGE HELPER TESTING");

console.log("==============================");

// Create test data

const testData = [
  {
    name: "Monday Shift",

    employees: ["Ana", "Ben"],
  },

  {
    name: "Tuesday Shift",

    employees: ["Carlos", "Diana"],
  },
];

// ==========================================================
// TEST 1:
// SAVE DATA
// ==========================================================

const saved = saveToStorage("weeklySchedule", testData);

console.log("Saved successfully?", saved);

// ==========================================================
// TEST 2:
// LOAD DATA
// ==========================================================

const schedule = loadFromStorage("weeklySchedule", []);

console.log("Loaded schedule:");

console.log(schedule);

// ==========================================================
// TEST 3:
// LOAD MISSING DATA
//
// This key does not exist,
// so default value should return.
// ==========================================================

const missing = loadFromStorage("nonExistentKey", "default value");

console.log("Missing data:");

console.log(missing);

// ==========================================================
// BONUS TESTING
// Verify localStorage directly
// ==========================================================

console.log("Direct localStorage check:");

console.log(localStorage.getItem("weeklySchedule"));

// ==========================================================
// FINAL RESULTS
// ==========================================================

console.log("==============================");

console.log("TEST COMPLETE");

console.log("==============================");
