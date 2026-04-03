const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is alive");
});

app.post("/todos", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);
    res.status(200).json("Todo created");
  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).json("Server error");
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ADD THIS:
setInterval(() => {}, 1000); // keeps Node event loop alive
