// ==========================================================
// ENHANCED TODO LIST
// Sprint 2 Final Project
//
// Part 1
//
// Features Included:
// • Data setup
// • DOM selection
// • Helper functions
// • Validation
// • Add Todo
// • Delete Todo
// • Toggle Complete
// • Message Functions
// ==========================================================

// ==========================================================
// DATA
// ==========================================================

// Stores every todo object
let todos = [];

// Keeps track of the next available ID
let nextId = 1;

// ----------------------------------------------------------
// Load the saved filter.
//
// If nothing has been saved yet,
// default to "all".
// ----------------------------------------------------------
let currentFilter = localStorage.getItem("todoFilter") || "all";

// ==========================================================
// DOM ELEMENTS
// ==========================================================

// Text input
const todoInput = document.getElementById("todo-input");

// Add button
const addButton = document.getElementById("add-btn");

// Todo list
const todoList = document.getElementById("todo-list");

// Message display
const messageArea = document.getElementById("message-area");

// Remaining task counter
const taskCount = document.getElementById("task-count");

// Current filter display
const currentFilterDisplay = document.querySelector("#current-filter span");

// Filter buttons
const allButton = document.getElementById("all-btn");

const activeButton = document.getElementById("active-btn");

const completedButton = document.getElementById("completed-btn");

// ==========================================================
// MESSAGE FUNCTIONS
// ==========================================================

// ----------------------------------------------------------
// Clears all messages
// ----------------------------------------------------------
function clearMessages() {
  // Remove any previous message
  messageArea.innerHTML = "";
}

// ----------------------------------------------------------
// Shows an error message
// ----------------------------------------------------------
function showError(message) {
  // Insert an error box
  messageArea.innerHTML = `<div class="error">${message}</div>`;
}

// ----------------------------------------------------------
// Shows a success message
// ----------------------------------------------------------
function showSuccess(message) {
  // Insert a success box
  messageArea.innerHTML = `<div class="success">${message}</div>`;
}

// ==========================================================
// VALIDATION
// ==========================================================

// ----------------------------------------------------------
// Checks whether the entered todo is valid
// ----------------------------------------------------------
function validateTodo(text) {
  // Remove extra spaces
  text = text.trim();

  // Empty?
  if (text === "") {
    showError("Please enter a task.");

    return false;
  }

  // Too short?
  if (text.length < 3) {
    showError("Task must be at least 3 characters.");

    return false;
  }

  // Everything looks good
  return true;
}

// ==========================================================
// ADD TODO
// ==========================================================

// ----------------------------------------------------------
// Creates a new todo object
// ----------------------------------------------------------
function addTodo(text) {
  // Validate first
  if (!validateTodo(text)) {
    return;
  }

  // Build a new todo object
  const newTodo = {
    id: nextId,

    text: text.trim(),

    completed: false,
  };

  // Add it to the array
  todos.push(newTodo);

  // Increase next ID
  nextId++;

  // Show confirmation
  showSuccess("Task added successfully!");

  // Update the page
  renderTodos();
}

// ==========================================================
// DELETE TODO
// ==========================================================

// ----------------------------------------------------------
// Removes a todo by ID
// ----------------------------------------------------------
function deleteTodo(id) {
  // Filter out the matching todo
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });

  // Refresh page
  renderTodos();
}

// ==========================================================
// TOGGLE COMPLETE
// ==========================================================

// ----------------------------------------------------------
// Changes completed
// true -> false
// false -> true
// ----------------------------------------------------------
function toggleComplete(id) {
  // Find the matching todo
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });

  // If found...
  if (todo) {
    // Flip completed value
    todo.completed = !todo.completed;
  }

  // Refresh page
  renderTodos();
}

// ==========================================================
// FILTER FUNCTIONS
// ==========================================================

// ----------------------------------------------------------
// Save current filter
// ----------------------------------------------------------
function saveFilter() {
  localStorage.setItem(
    "todoFilter",

    currentFilter,
  );
}

// ----------------------------------------------------------
// Update active button styling
// ----------------------------------------------------------
function updateFilterButtons() {
  // Remove active class
  allButton.classList.remove("active-filter");
  activeButton.classList.remove("active-filter");
  completedButton.classList.remove("active-filter");

  // Highlight current filter
  if (currentFilter === "all") {
    allButton.classList.add("active-filter");
  } else if (currentFilter === "active") {
    activeButton.classList.add("active-filter");
  } else {
    completedButton.classList.add("active-filter");
  }

  // Update text on page
  currentFilterDisplay.textContent =
    currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
}

// ==========================================================
// RENDER TODOS
// ==========================================================

// ----------------------------------------------------------
// Displays the todos on the webpage
// ----------------------------------------------------------
function renderTodos() {
  // Remove old todos
  todoList.innerHTML = "";

  // Variable that will store the todos we want to display
  let filteredTodos = [];

  // --------------------------------------------------------
  // Decide which todos to display
  // --------------------------------------------------------

  if (currentFilter === "all") {
    filteredTodos = todos;
  } else if (currentFilter === "active") {
    filteredTodos = todos.filter(function (todo) {
      return todo.completed === false;
    });
  } else {
    filteredTodos = todos.filter(function (todo) {
      return todo.completed === true;
    });
  }

  // --------------------------------------------------------
  // Display every filtered todo
  // --------------------------------------------------------

  filteredTodos.forEach(function (todo) {
    // Create a list item
    const li = document.createElement("li");

    // Apply CSS class
    li.className = "todo-item";

    // Create span for todo text
    const todoText = document.createElement("span");

    // Add CSS class
    todoText.className = "todo-text";

    // Show task text
    todoText.textContent = todo.text;

    // ------------------------------------------
    // If completed, add strike-through styling
    // ------------------------------------------

    if (todo.completed) {
      todoText.classList.add("completed");
    }

    // ------------------------------------------
    // Clicking text toggles completion
    // ------------------------------------------

    todoText.addEventListener(
      "click",

      function () {
        toggleComplete(todo.id);
      },
    );

    // ------------------------------------------
    // Create Delete button
    // ------------------------------------------

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";

    // Delete when clicked
    deleteButton.addEventListener(
      "click",

      function () {
        deleteTodo(todo.id);
      },
    );

    // Add text and button to list item
    li.appendChild(todoText);

    li.appendChild(deleteButton);

    // Add list item to page
    todoList.appendChild(li);
  });

  // --------------------------------------------------------
  // Calculate remaining tasks
  // --------------------------------------------------------

  const remainingTasks = todos.filter(function (todo) {
    return todo.completed === false;
  });

  // Update task counter
  taskCount.textContent = "Tasks Remaining: " + remainingTasks.length;

  // Highlight selected filter button
  updateFilterButtons();
}

// ==========================================================
// FILTER BUTTON EVENTS
// ==========================================================

// ----------------------------------------------------------
// ALL FILTER
// ----------------------------------------------------------

allButton.addEventListener(
  "click",

  function () {
    currentFilter = "all";

    saveFilter();

    renderTodos();
  },
);

// ----------------------------------------------------------
// ACTIVE FILTER
// ----------------------------------------------------------

activeButton.addEventListener(
  "click",

  function () {
    currentFilter = "active";

    saveFilter();

    renderTodos();
  },
);

// ----------------------------------------------------------
// COMPLETED FILTER
// ----------------------------------------------------------

completedButton.addEventListener(
  "click",

  function () {
    currentFilter = "completed";

    saveFilter();

    renderTodos();
  },
);

// ==========================================================
// ADD BUTTON EVENT
// ==========================================================

// Add a task when clicking the button
addButton.addEventListener(
  "click",

  function () {
    // Add the todo
    addTodo(todoInput.value);

    // Clear textbox
    todoInput.value = "";

    // Put cursor back into textbox
    todoInput.focus();
  },
);

// ==========================================================
// ENTER KEY SUPPORT
// ==========================================================

// Allows pressing Enter to add a task
todoInput.addEventListener(
  "keypress",

  function (event) {
    if (event.key === "Enter") {
      addTodo(todoInput.value);

      todoInput.value = "";

      todoInput.focus();
    }
  },
);

// ==========================================================
// INITIAL STARTER TODOS
// ==========================================================

// These appear when the application first loads

addTodo("Complete Sprint 2 Project");

addTodo("Practice JavaScript");

addTodo("Prepare Sprint Review");

// Mark one completed for testing
toggleComplete(2);

// ==========================================================
// INITIAL PAGE LOAD
// ==========================================================

// Highlight saved filter
updateFilterButtons();

// Display todos
renderTodos();

// ==========================================================
// CONSOLE TESTING
// ==========================================================

console.log("-----------------------------------");
console.log("Enhanced Todo List Loaded");
console.log("-----------------------------------");

console.log("Current Filter:");
console.log(currentFilter);

console.log("-----------------------------------");

console.log("Todos:");
console.log(todos);

console.log("-----------------------------------");

console.log("localStorage Filter:");

console.log(localStorage.getItem("todoFilter"));

console.log("-----------------------------------");

console.log("Remaining Tasks:");

console.log(
  todos.filter(function (todo) {
    return !todo.completed;
  }).length,
);

console.log("-----------------------------------");

console.log("Project Ready for Sprint Demo!");
