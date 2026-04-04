const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware

app.use(cors());
app.use(express.json()); //request body is in json format

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo .rows[0]);
    // console.log("BODY RECEIVED:", req.body);
    // res.status(200).json("Todo created just now");
  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).json("Server error");
  }
})


// get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).json("Server error");
  }
});

// get a todo

// update a todo

// delete a todo



const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});