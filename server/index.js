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

    res.json(newTodo.rows[0]);
    

  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).json("Server error");
  }
})


const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});