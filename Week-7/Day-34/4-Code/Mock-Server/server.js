const express = require("express");
const cors = require("cors");

const users = [
  {
    id: 1,
    name: "Maria",
    email: "maria@email.com",
  },
  {
    id: 2,
    name: "James",
    email: "james@email.com",
  },
];

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
