// Select the clock display element
const clockDisplay = document.getElementById("clock");

// Store the interval ID here.
//
// We start with null because the clock
// is not running yet.
let clockInterval = null;

// Function that updates the clock display
function updateClock() {
  // Create a new Date object.
  // This gets the current date and time.
  const now = new Date();

  // Get the current hour.
  //
  // String() converts the number into text.
  //
  // padStart(2, "0") makes sure it always
  // has two digits.
  //
  // Example:
  // 5 becomes 05
  const hours = String(now.getHours()).padStart(2, "0");

  // Get the current minutes.
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // Get the current seconds.
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Display the time in HH:MM:SS format
  clockDisplay.textContent = hours + ":" + minutes + ":" + seconds;
}

// Select the Start button
const startBtn = document.getElementById("startBtn");

// Select the Stop button
const stopBtn = document.getElementById("stopBtn");

// ============================================
// START BUTTON HANDLER
// ============================================

startBtn.addEventListener("click", function () {
  // Prevent multiple intervals from being created.
  //
  // Without this check:
  // Clicking Start 5 times would create
  // 5 clocks running at the same time.
  if (clockInterval !== null) {
    return;
  }

  // Update the clock immediately.
  //
  // Without this line:
  // The user would click Start and wait
  // 1 second before seeing the time.
  updateClock();

  // setInterval repeats a function
  // after a specific amount of time.
  //
  // 1000 milliseconds = 1 second
  //
  // Every second:
  // updateClock() runs again.
  clockInterval = setInterval(updateClock, 1000);
});

// ============================================
// STOP BUTTON HANDLER
// ============================================

stopBtn.addEventListener("click", function () {
  // clearInterval stops the repeating timer.
  //
  // It uses the interval ID created
  // by setInterval().
  clearInterval(clockInterval);

  // Reset interval variable.
  //
  // This allows the Start button
  // to create a new interval later.
  clockInterval = null;
});
