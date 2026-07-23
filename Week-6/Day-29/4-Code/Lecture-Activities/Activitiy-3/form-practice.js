// ======================================================
// FORM DISPLAY MESSAGE PRACTICE
//
// Goal:
// Move validation messages from the console
// onto the actual webpage.
//
// NEW FEATURES:
// 1. showError()
// 2. showSuccess()
// 3. clearMessages()
// ======================================================

// ======================================================
// SELECT DOM ELEMENTS
// ======================================================

// Get the form element.
const form = document.getElementById("feedback-form");

// ======================================================
// NEW CHANGE FROM ACTIVITY 2:
//
// Select message area.
//
// This is where success and error messages
// will appear on the page.
// ======================================================

const messageArea = document.getElementById("message-area");

// ======================================================
// NEW FUNCTION:
// showError()
//
// Purpose:
// Display an error message on the page.
// ======================================================

function showError(message) {
  // Put HTML inside message area.
  messageArea.innerHTML = `

        <div class="error">
            ${message}
        </div>

    `;
}

// ======================================================
// NEW FUNCTION:
// showSuccess()
//
// Purpose:
// Display a success message on the page.
// ======================================================

function showSuccess(message) {
  // Add success message HTML.
  messageArea.innerHTML = `

        <div class="success">
            ${message}
        </div>

    `;
}

// ======================================================
// NEW FUNCTION:
// clearMessages()
//
// Purpose:
// Remove previous messages before
// showing a new one.
// ======================================================

function clearMessages() {
  // Empty the message area.
  messageArea.innerHTML = "";
}

// ======================================================
// FORM SUBMIT EVENT
// ======================================================

form.addEventListener("submit", function (event) {
  // Prevent page refresh.
  event.preventDefault();

  // ==================================================
  // NEW CHANGE:
  //
  // Clear old messages every time
  // the user submits again.
  // ==================================================

  clearMessages();

  // ==================================================
  // GET VALUES
  // ==================================================

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let visitDate = document.getElementById("visit-date").value;

  let feedback = document.getElementById("feedback").value;

  // Assume form is valid.
  let isValid = true;

  // ==================================================
  // VALIDATE NAME
  // ==================================================

  if (name.trim() === "") {
    showError("Name cannot be empty");

    isValid = false;
  }

  // ==================================================
  // VALIDATE EMAIL
  // ==================================================

  if (email.trim() === "") {
    showError("Email cannot be empty");

    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    showError("Email must contain @ and .");

    isValid = false;
  }

  // ==================================================
  // VALIDATE FEEDBACK
  // ==================================================

  if (feedback.trim() === "") {
    showError("Feedback cannot be empty");

    isValid = false;
  }

  // ==================================================
  // SUCCESS MESSAGE
  // ==================================================

  if (isValid) {
    showSuccess("Form is valid! Thank you for your feedback.");

    console.log("Form Data:", {
      name: name,
      email: email,
      visitDate: visitDate,
      feedback: feedback,
    });
  }
});

// ======================================================
// TESTING
// ======================================================

console.log("Form Message Script Loaded");

console.log("Message Area:", messageArea);
