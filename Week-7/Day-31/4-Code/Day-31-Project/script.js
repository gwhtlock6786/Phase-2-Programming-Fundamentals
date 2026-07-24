// ==========================================================
// ENHANCED TODO LIST APPLICATION
// FULL LOCAL STORAGE PERSISTENCE
//
// Features:
// ✔ Add todos
// ✔ Delete todos
// ✔ Toggle complete
// ✔ Filter todos
// ✔ Save data automatically
// ✔ Load data after refresh
// ✔ Error handling
// ==========================================================

// ==========================================================
// LOCAL STORAGE SETUP
// ==========================================================

// The key used to save our todos
const STORAGE_KEY = "myTodoList";

// ==========================================================
// LOAD TODOS
// ==========================================================

// Loads saved todos when the page starts
function loadTodos() {
  try {
    // Get saved JSON string
    const savedText = localStorage.getItem(STORAGE_KEY);

    // First visit
    if (savedText === null) {
      return [];
    }

    // Convert JSON back into array
    return JSON.parse(savedText);
  } catch (error) {
    console.error("Error loading todos:", error);

    return [];
  }
}

// ==========================================================
// SAVE TODOS
// ==========================================================

// Saves the complete todo array
function saveTodos(todos) {
  try {
    // Convert array into JSON string
    const jsonText = JSON.stringify(todos);

    // Save data
    localStorage.setItem(STORAGE_KEY, jsonText);

    console.log("Todos saved:", jsonText);
  } catch (error) {
    console.error("Error saving todos:", error);
  }
}

// ==========================================================
// DOM ELEMENTS
// ==========================================================

// Input field
const todoInput = document.getElementById("todo-input");

// Add button
const addButton = document.getElementById("add-btn");

// Todo list
const todoList = document.getElementById("todo-list");

// Messages
const messageArea = document.getElementById("message-area");

// Task counter
const taskCount = document.getElementById("task-count");

// Filter display
const currentFilterDisplay = document.querySelector("#current-filter span");

// Filter buttons
const allButton = document.getElementById("all-btn");

const activeButton = document.getElementById("active-btn");

const completedButton = document.getElementById("completed-btn");

// ==========================================================
// DATA
// ==========================================================

// Load saved todos
let todos = loadTodos();

// Create next ID
let nextId =
  todos.length > 0
    ? Math.max(
        ...todos.map(function (todo) {
          return todo.id;
        }),
      ) + 1
    : 1;

// Load saved filter
let currentFilter = "all";

try {
  currentFilter = localStorage.getItem("todoFilter") || "all";
} catch (error) {
  console.error("Error loading filter:", error);
}

// ==========================================================
// MESSAGE FUNCTIONS
// ==========================================================

function showError(message) {
  messageArea.innerHTML = `<div class="error">${message}</div>`;
}

function showSuccess(message) {
  messageArea.innerHTML = `<div class="success">${message}</div>`;
}

function clearMessages() {
  messageArea.innerHTML = "";
}

// ==========================================================
// VALIDATION
// ==========================================================

function validateTodo(text) {
  text = text.trim();

  if (text === "") {
    showError("Please enter a task.");

    return false;
  }

  if (text.length < 3) {
    showError("Task must contain at least 3 characters.");

    return false;
  }

  return true;
}

// ==========================================================
// ADD TODO FUNCTION
// ==========================================================

// Creates a new todo and saves it
function addTodo(text) {
  // Check if todo is valid
  if (!validateTodo(text)) {
    return;
  }

  // Create new todo object
  const newTodo = {
    // Unique ID
    id: nextId,

    // Todo text
    text: text.trim(),

    // New todos start incomplete
    completed: false,
  };

  // Add todo to array
  todos.push(newTodo);

  // Increase ID counter
  nextId++;

  // Save updated array
  saveTodos(todos);

  // Show success message
  showSuccess("Task added successfully!");

  // Refresh page display
  renderTodos();
}

// ==========================================================
// DELETE TODO FUNCTION
// ==========================================================

// Removes a todo from the array
function deleteTodo(id) {
  try {
    // Remove matching todo
    todos = todos.filter(function (todo) {
      return todo.id !== id;
    });

    // If all todos were deleted,
    // restart ID counting at 1
    if (todos.length === 0) {
      nextId = 1;
    }

    // Save updated array
    saveTodos(todos);

    // Show message
    showSuccess("Task deleted successfully!");

    // Update screen
    renderTodos();
  } catch (error) {
    console.error("Delete error:", error);
  }
}

// ==========================================================
// TOGGLE COMPLETE FUNCTION
// ==========================================================

// Changes completed:
// false -> true
// true -> false
function toggleComplete(id) {
  try {
    // Find todo by ID
    const todo = todos.find(function (todo) {
      return todo.id === id;
    });

    // If todo exists
    if (todo) {
      // Flip completed value
      todo.completed = !todo.completed;
    }

    // Save change
    saveTodos(todos);

    // Refresh display
    renderTodos();
  } catch (error) {
    console.error("Toggle error:", error);
  }
}

// ==========================================================
// FILTER FUNCTIONS
// ==========================================================

// Saves selected filter
function saveFilter() {
  try {
    localStorage.setItem("todoFilter", currentFilter);
  } catch (error) {
    console.error("Filter save error:", error);
  }
}

// Updates button styling
function updateFilterButtons() {
  // Remove active styling
  allButton.classList.remove("active-filter");

  activeButton.classList.remove("active-filter");

  completedButton.classList.remove("active-filter");

  // Add active styling
  if (currentFilter === "all") {
    allButton.classList.add("active-filter");
  } else if (currentFilter === "active") {
    activeButton.classList.add("active-filter");
  } else {
    completedButton.classList.add("active-filter");
  }

  // Update filter text
  currentFilterDisplay.textContent =
    currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
}

// ==========================================================
// RENDER TODOS
// ==========================================================

// Displays todos on the page
function renderTodos() {
  // Clear existing list
  todoList.innerHTML = "";

  // Stores filtered todos
  let filteredTodos = [];

  // Determine which todos display

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

  // Display each todo
  filteredTodos.forEach(function (todo) {
    // Create list item
    const li = document.createElement("li");

    li.className = "todo-item";

    // Create todo text
    const span = document.createElement("span");

    span.textContent = todo.text;

    span.className = "todo-text";

    // Completed styling
    if (todo.completed) {
      span.classList.add("completed");
    }

    // Clicking text toggles complete
    span.addEventListener("click", function () {
      toggleComplete(todo.id);
    });

    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";

    // Delete button event
    deleteButton.addEventListener("click", function () {
      deleteTodo(todo.id);
    });

    // Add elements
    li.appendChild(span);

    li.appendChild(deleteButton);

    // Add todo to page
    todoList.appendChild(li);
  });

  // Count remaining todos
  const remaining = todos.filter(function (todo) {
    return todo.completed === false;
  });

  // Update counter
  taskCount.textContent = "Tasks Remaining: " + remaining.length;

  // Update filter buttons
  updateFilterButtons();
}

// ==========================================================
// FILTER BUTTON EVENTS
// ==========================================================

allButton.addEventListener("click", function () {
  currentFilter = "all";

  saveFilter();

  renderTodos();
});

activeButton.addEventListener("click", function () {
  currentFilter = "active";

  saveFilter();

  renderTodos();
});

completedButton.addEventListener("click", function () {
  currentFilter = "completed";

  saveFilter();

  renderTodos();
});

// ==========================================================
// ADD BUTTON EVENT LISTENER
// ==========================================================

// Runs when Add button is clicked
addButton.addEventListener("click", function () {
  // Send input value to addTodo()
  addTodo(todoInput.value);

  // Clear input box
  todoInput.value = "";

  // Put cursor back in input
  todoInput.focus();
});

// ==========================================================
// ENTER KEY SUPPORT
// ==========================================================

// Allows pressing Enter to add a todo
todoInput.addEventListener("keypress", function (event) {
  // Check if Enter key was pressed
  if (event.key === "Enter") {
    if (validateTodo(todoInput.value)) {
      // Add todo
      addTodo(todoInput.value);

      // Clear input
      todoInput.value = "";
    }
    // Focus input again
    todoInput.focus();
  }
});

// ==========================================================
// APPLICATION STARTUP
// ==========================================================

// Update filter buttons
// based on saved filter
updateFilterButtons();

// Display saved todos
renderTodos();

// Automatically place cursor
// inside input field
todoInput.focus();

// ==========================================================
// FINAL CONSOLE TESTING
// ==========================================================
//
// These logs confirm:
// ✔ Todos load
// ✔ Todos save
// ✔ Filters save
// ✔ Completed status saves
//
// ==========================================================

console.log("=================================");

console.log("ENHANCED TODO APPLICATION LOADED");

console.log("=================================");

// Display current filter
console.log("Current Filter:");

console.log(currentFilter);

// Display todos in memory
console.log("Current Todos:");

console.log(todos);

// Display raw localStorage data
console.log("Saved Local Storage Data:");

console.log(localStorage.getItem(STORAGE_KEY));

// Display completed todos
const completedTodos = todos.filter(function (todo) {
  return todo.completed === true;
});

console.log("Completed Todos:");

console.log(completedTodos);

// Display active todos
const activeTodos = todos.filter(function (todo) {
  return todo.completed === false;
});

console.log("Active Todos:");

console.log(activeTodos);

console.log("=================================");

console.log("Persistence is working!");

console.log("Add, delete, and toggle changes save automatically.");

console.log("=================================");
