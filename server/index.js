const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());
// ROUTES

// Create a todo
app.post('/todos', async (req, res) => {
    try {
        console.log(req.body);
        res.json("Todo created");
    } catch (err) {
        console.error(err.message);
    }
})
// Get all todos

// Get a todo

// Update a todo

// Delete a todo    

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})