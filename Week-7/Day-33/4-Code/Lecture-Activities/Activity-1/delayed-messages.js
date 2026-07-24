// Select the div where messages will be displayed
const messagesDiv = document.getElementById("messages");

// Select the button element
const orderBtn = document.getElementById("orderBtn");

// Helper function to create and display messages
function addMessage(text) {
  // Create a new paragraph element
  const p = document.createElement("p");

  // Add the message text inside the paragraph
  p.textContent = text;

  // Add the paragraph to the messages div
  messagesDiv.appendChild(p);
}

// Listen for a click on the order button
orderBtn.addEventListener("click", function () {
  // Remove old messages before starting a new order
  messagesDiv.innerHTML = "";

  // This message appears immediately
  addMessage("Order received!");

  // setTimeout runs code after a delay
  //
  // First parameter:
  // The function we want to run
  //
  // Second parameter:
  // Time delay in milliseconds
  //
  // 1000 milliseconds = 1 second

  setTimeout(function () {
    addMessage("Cooking started");
  }, 1000);

  // This message appears after 4 seconds
  //
  // 4000 milliseconds = 4 seconds

  setTimeout(function () {
    addMessage("Food is ready");
  }, 4000);

  // This message appears after 6 seconds
  //
  // 6000 milliseconds = 6 seconds

  setTimeout(function () {
    addMessage("Order delivered");
  }, 6000);
});
