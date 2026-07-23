// ======================================================
// TODO LIST APPLICATION
// CRUD PROJECT
//
// Create
// Read
// Update
// Delete
// ======================================================

// ======================================================
// DATA
// ======================================================

// Array that stores all todo objects
let todos = [];

// Starting ID number
let nextId = 1;

// ======================================================
// DOM ELEMENTS
// ======================================================

// Get input element
const todoInput = document.getElementById("todo-input");

// Get add button
const addBtn = document.getElementById("add-btn");

// Get unordered list
const todoList = document.getElementById("todo-list");

// Get task counter
const taskCount = document.getElementById("task-count");

// ======================================================
// ADD TODO FUNCTION
// ======================================================

// Function that creates a new todo
function addTodo(text) {
  // Prevent empty tasks
  if (text.trim() === "") {
    alert("Please enter a task!");

    return;
  }

  // Create todo object
  let newTodo = {
    // Assign unique ID
    id: nextId,

    // Store task text
    text: text,

    // New tasks start incomplete
    completed: false,
  };

  // Add todo object to array
  todos.push(newTodo);

  // Increase ID for next todo
  nextId++;

  // Update display
  renderTodos();
}

// ======================================================
// DELETE TODO FUNCTION
// ======================================================

function deleteTodo(id) {
  // Remove todo with matching ID
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });

  // Refresh page display
  renderTodos();
}

// ======================================================
// DISPLAY TODOS FUNCTION
// ======================================================

function renderTodos() {
  // Clear old list
  todoList.innerHTML = "";

  // Loop through every todo
  todos.forEach(function (todo) {
    // Create list item
    let li = document.createElement("li");

    // Add CSS class
    li.className = "todo-item";

    // Create text span
    let span = document.createElement("span");

    // Add todo text
    span.textContent = todo.text;

    // Add styling class
    span.className = "todo-text";

    // Create delete button
    let button = document.createElement("button");

    // Add button text
    button.textContent = "Delete";

    // Add styling class
    button.className = "delete-btn";

    // When button clicked delete todo
    button.addEventListener("click", function () {
      deleteTodo(todo.id);
    });

    // Add text to list item
    li.appendChild(span);

    // Add button to list item
    li.appendChild(button);

    // Add list item to page
    todoList.appendChild(li);
  });

  // Count unfinished tasks
  let remaining = todos.filter(function (todo) {
    return todo.completed === false;
  }).length;

  // Update counter
  taskCount.textContent = "Tasks Remaining: " + remaining;
}

// ======================================================
// BUTTON EVENT
// ======================================================

addBtn.addEventListener("click", function () {
  // Add input value
  addTodo(todoInput.value);

  // Clear input
  todoInput.value = "";
});

// ======================================================
// ENTER KEY SUPPORT
// BONUS FEATURE
// ======================================================

todoInput.addEventListener("keypress", function (event) {
  // Check if Enter was pressed
  if (event.key === "Enter") {
    addTodo(todoInput.value);

    todoInput.value = "";
  }
});

// ======================================================
// TESTING SECTION
// ======================================================

console.log("Starting Todo Application");

console.log("Current Todos:", todos);

// Test adding sample data
addTodo("Learn JavaScript");
addTodo("Practice DOM manipulation");
addTodo("Build CRUD applications");

console.log("Todos After Testing:", todos);

console.log("Total Todos:", todos.length);
