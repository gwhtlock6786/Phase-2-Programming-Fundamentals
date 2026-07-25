// ============================================
// DAY 34 FETCH API PRACTICE SERVER
// Supports:
// /users
// /posts
// /todos
// ============================================

// Import Express
const express = require("express");

// Import CORS
const cors = require("cors");

// Create Express app
const app = express();

// Server port
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARE
// ============================================

// Allow frontend requests
app.use(cors());

// Allow JSON data
app.use(express.json());

// ============================================
// USERS DATA
// ============================================

const users = [
  {
    id: 1,
    name: "Maria Rodriguez",
    email: "maria@email.com",
    company: "Tech Solutions",
  },

  {
    id: 2,
    name: "James Smith",
    email: "james@email.com",
    company: "Web Developers Inc.",
  },

  {
    id: 3,
    name: "Alex Johnson",
    email: "alex@email.com",
    company: "Code Academy",
  },
];

// ============================================
// POSTS DATA
// ============================================

const posts = [
  {
    id: 1,
    title: "Learning JavaScript",
    content: "JavaScript makes websites interactive.",
    author: "Maria",
  },

  {
    id: 2,
    title: "Understanding APIs",
    content: "APIs allow applications to communicate.",
    author: "James",
  },

  {
    id: 3,
    title: "Building Projects",
    content: "Projects help developers practice skills.",
    author: "Alex",
  },
];

// ============================================
// TODOS DATA
// ============================================

const todos = [
  {
    id: 1,
    task: "Complete Fetch API lesson",
    completed: true,
  },

  {
    id: 2,
    task: "Build user dashboard",
    completed: false,
  },

  {
    id: 3,
    task: "Practice JavaScript DOM",
    completed: false,
  },
];

// ============================================
// ROUTES
// ============================================

// Test route

app.get("/", (req, res) => {
  res.send("Fetch API Server Running");
});

// USERS ENDPOINT

app.get("/users", (req, res) => {
  res.json(users);
});

// POSTS ENDPOINT

app.get("/posts", (req, res) => {
  res.json(posts);
});

// TODOS ENDPOINT

app.get("/todos", (req, res) => {
  res.json(todos);
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
