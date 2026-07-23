// ======================================================
// TODO TOGGLE COMPLETE PRACTICE
//
// New Feature:
// Users can click a todo to mark it
// complete or incomplete.
//
// Added:
// - toggleComplete()
// - completed styling
// - click events
// ======================================================

// ======================================================
// DATA
// ======================================================

// Array storing todo objects
let todos = [
  {
    id: 1,

    text: "Complete JavaScript practice",

    completed: false,
  },

  {
    id: 2,

    text: "Study DOM manipulation",

    completed: false,
  },

  {
    id: 3,

    text: "Build Todo App",

    completed: false,
  },
];

// Keeps track of next ID
let nextId = 4;

// ======================================================
// DOM ELEMENTS
// ======================================================

// Get input field
const todoInput = document.getElementById("todo-input");

// Get add button
const addBtn = document.getElementById("add-btn");

// Get todo list
const todoList = document.getElementById("todo-list");

// Get task counter
const taskCount = document.getElementById("task-count");

// ======================================================
// ADD TODO FUNCTION
// ======================================================

function addTodo(text) {
  // Create new object
  let newTodo = {
    id: nextId,

    text: text,

    // Every new todo starts incomplete
    completed: false,
  };

  // Add object to array
  todos.push(newTodo);

  // Increase ID
  nextId++;

  // Refresh display
  renderTodos();
}

// ======================================================
// NEW FUNCTION
//
// toggleComplete()
//
// Purpose:
// Find a todo and flip completed
// from true to false or false to true
// ======================================================

function toggleComplete(id) {
  // Find matching todo
  let todo = todos.find(function (todo) {
    return todo.id === id;
  });

  // Make sure todo exists
  if (todo) {
    // Flip completed value
    //
    // false becomes true
    // true becomes false
    //
    todo.completed = !todo.completed;
  }

  // Update page
  renderTodos();
}

// ======================================================
// RENDER TODOS
// ======================================================

function renderTodos() {
  // Clear previous HTML
  todoList.innerHTML = "";

  // Loop through todos
  todos.forEach(function (todo) {
    // Create list item
    let li = document.createElement("li");

    // Add class
    li.className = "todo-item";

    // Add todo text
    li.textContent = todo.text;

    // ==================================================
    // NEW CHANGE:
    //
    // Apply completed styling
    // if completed is true
    // ==================================================

    if (todo.completed) {
      li.classList.add("completed");
    }

    // ==================================================
    // NEW CHANGE:
    //
    // Add click event
    //
    // Clicking todo calls toggleComplete()
    // ==================================================

    li.addEventListener("click", function () {
      toggleComplete(todo.id);
    });

    // Add item to page
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
// ADD BUTTON EVENT
// ======================================================

addBtn.addEventListener("click", function () {
  // Add input text
  addTodo(todoInput.value);

  // Clear input
  todoInput.value = "";
});

// ======================================================
// TESTING SECTION
// ======================================================

console.log("Starting Todos:");

console.log(todos);

// Test toggle function
console.log("Testing toggleComplete on ID 1");

toggleComplete(1);

console.log("After Toggle:");

console.log(todos);

// Render initial page
renderTodos();
