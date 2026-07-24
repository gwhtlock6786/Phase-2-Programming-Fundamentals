// ============================================
// Kitchen Countdown Timer
// ============================================

// ============================================
// State Variables
// ============================================

// Starting time for timer.
// 5 minutes = 300 seconds.
const INITIAL_TIME = 300;

// Stores the current countdown time.
let totalSeconds = INITIAL_TIME;

// Stores the interval ID.
// Starts as null because timer is not running.
let timerInterval = null;

// ============================================
// DOM Elements
// ============================================

// Select timer display element.
const timerDisplay = document.getElementById("timer");

// Select Start button.
const startBtn = document.getElementById("startBtn");

// Select Stop button.
const stopBtn = document.getElementById("stopBtn");

// Select Reset button.
const resetBtn = document.getElementById("resetBtn");

// ============================================
// Helper: Format seconds as MM:SS
// ============================================

// Converts seconds into a readable timer format.
//
// Example:
// 300 seconds becomes "05:00"
// 75 seconds becomes "01:15"

function formatTime(seconds) {
  // Calculate whole minutes.
  const mins = Math.floor(seconds / 60);

  // Calculate remaining seconds.
  //
  // The remainder operator (%) gives
  // what is left after division.
  const secs = seconds % 60;

  // Convert numbers into strings.
  //
  // padStart adds a zero if needed.
  //
  // Example:
  // 5 becomes "05"
  return String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}

// ============================================
// Helper: Update the display
// ============================================

// Updates what the user sees on the page.
function updateDisplay() {
  // Change timer text to formatted time.
  timerDisplay.textContent = formatTime(totalSeconds);

  // Add/remove warning class
  //
  // If there are less than 30 seconds remaining,
  // turn the timer red.
  if (totalSeconds < 30 && totalSeconds > 0) {
    // Add CSS class.
    timerDisplay.classList.add("warning");
  } else {
    // Remove CSS class.
    timerDisplay.classList.remove("warning");
  }
}

// ============================================
// Main countdown function
// ============================================

// This function runs every second
// while the timer is active.
function countdown() {
  // Decrease timer by one second.
  totalSeconds--;

  // Refresh the display.
  updateDisplay();

  // Check if timer reached zero.
  if (totalSeconds <= 0) {
    // TODO: Clear interval
    // TODO: Show completion message

    // Stop the repeating timer.
    clearInterval(timerInterval);

    // Reset interval variable.
    timerInterval = null;

    // Show completion message.
    alert("Time is up! Order complete!");

    // Make sure timer stays at 00:00.
    totalSeconds = 0;

    // Update display one last time.
    updateDisplay();
  }
}

// ============================================
// Start Button Event Listener
// ============================================

// Start countdown when button is clicked.
startBtn.addEventListener("click", function () {
  // Prevent duplicate intervals.
  //
  // Without this check:
  // Clicking Start multiple times
  // creates multiple timers running together.
  if (timerInterval !== null) {
    return;
  }

  // Create interval that calls countdown()
  // every 1000 milliseconds.
  //
  // 1000 milliseconds = 1 second.
  timerInterval = setInterval(countdown, 1000);
});

// ============================================
// Stop Button Event Listener
// ============================================

// Pause countdown without resetting time.
stopBtn.addEventListener("click", function () {
  // Stop the interval.
  clearInterval(timerInterval);

  // Allow timer to be started again.
  timerInterval = null;
});

// ============================================
// Reset Button Event Listener
// ============================================

// Reset timer back to 5 minutes.
resetBtn.addEventListener("click", function () {
  // Stop any running timer.
  clearInterval(timerInterval);

  // Remove interval reference.
  timerInterval = null;

  // Restore starting time.
  totalSeconds = INITIAL_TIME;

  // Update display back to 05:00.
  updateDisplay();

  // Remove warning color.
  timerDisplay.classList.remove("warning");
});

// ============================================
// Initialize display
// ============================================

// Makes sure timer displays correctly
// when page first loads.
updateDisplay();
