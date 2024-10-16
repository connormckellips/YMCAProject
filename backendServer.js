const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;


app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('741.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});
//test case
// Endpoint to get all classes
app.get('/api/classes', (req, res) => {
    const query = 'SELECT * FROM classes';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.message);
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Endpoint to search for a class by name
app.get('/api/classes/search', (req, res) => {
    const className = req.query.name; // Get the class name from query parameters
    const query = 'SELECT * FROM classes WHERE name LIKE ?';
    db.all(query, [`%${className}%`], (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.message);
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Endpoint to set up a class
app.get('/api/classes/add', (req, res) => {
    const classID = req.query.id;
    const className = req.query.name;
    const description = req.query.description;
    const date = req.query.date;
    const start = req.query.start;
    const end = req.query.end;
    const teacherID = req.query.teacherID;
    const query = 'INSERT INTO classes ? ? ? ? ? ? ? ';
    db.all(query, [`%${classID}%`, `%${className}%`, `%${description}%`, `%${date}%`, `%${start}%`, `%${end}%`, `%${teacherID}%`], (err) => {
        if (err) {
            console.error('Error executing query:', err.message);
            res.status(500).json({ error: err.message });
            return;
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});