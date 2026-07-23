// Select form
const form = document.querySelector("#contact-form");

// Select message area
const messageArea = document.querySelector("#message-area");

// Validation function
function validate(name, email, message) {
  // Store errors
  const errors = [];

  // Check name
  if (name.trim() === "") {
    errors.push("Name is required");
  }

  // Check email
  if (email.trim() === "") {
    errors.push("Email is required");
  } else if (!email.includes("@") || !email.includes(".")) {
    errors.push("Email format is invalid");
  }

  // Check message
  if (message.trim() === "") {
    errors.push("Message is required");
  }

  return errors;
}

// Display errors
function showErrors(errors) {
  const errorHTML = errors
    .map(function (error) {
      return `<p>${error}</p>`;
    })
    .join("");

  messageArea.innerHTML = `

        <div class="error">

            ${errorHTML}

        </div>

    `;
}

// Display success
function showSuccess() {
  messageArea.innerHTML = `

        <div class="success">

            Message sent successfully!

        </div>

    `;
}

// Submit event
form.addEventListener("submit", function (event) {
  // Stop refresh
  event.preventDefault();

  // Get values
  const name = document.querySelector("#name").value;

  const email = document.querySelector("#email").value;

  const message = document.querySelector("#message").value;

  // Validate
  const errors = validate(name, email, message);

  // Show errors
  if (errors.length > 0) {
    showErrors(errors);
  } else {
    showSuccess();

    // Clear form
    form.reset();
  }
});

console.log("Restaurant Contact Form Loaded");
