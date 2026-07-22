const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON body
app.use(express.json());

// GET API
app.get("/", (req, res) => {
  res.send("Welcome to Express API");
});

// GET all students
app.get("/students", (req, res) => {
  res.json([
    { id: 1, name: "Sara" },
    { id: 2, name: "John" },
  ]);
});

// GET student by ID (Params)
app.get("/students/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: "Student Found",
    id: id,
  });
});

// POST API (Body)
app.post("/students", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Student Added",
    data: req.body,
  });
});

// PUT API
app.put("/students/:id", (req, res) => {
  res.json({
    message: "Student Updated",
    id: req.params.id,
    data: req.body,
  });
});

// DELETE API
app.delete("/students/:id", (req, res) => {
  res.json({
    message: "Student Deleted",
    id: req.params.id,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
