const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = new sqlite3.Database('data.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err);
  } else {
    console.log('Connected to SQLite database!');
    db.run(`CREATE TABLE IF NOT EXISTS register_form (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      first_name TEXT,
      last_name TEXT,
      email TEXT,
      telephone_number TEXT,
      micro_church TEXT,
      area_of_residence TEXT,
      business_interest TEXT
    )`);
  }
});

// API endpoint to handle form submission and insert data into the SQLite table
app.post('/register', (req, res) => {
  const {
    title,
    first_name,
    last_name,
    email,
    telephone_number,
    micro_church,
    area_of_residence,
    business_interest,
  } = req.body;

  const query = `INSERT INTO register_form 
                 (title, first_name, last_name, email, telephone_number, micro_church, area_of_residence, business_interest) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(
    query,
    [title, first_name, last_name, email, telephone_number, micro_church, area_of_residence, business_interest],
    (err) => {
      if (err) {
        console.error('Error inserting data into SQLite:', err);
        res.status(500).send('Error inserting data into SQLite.');
      } else {
        res.status(200).send('Successfully registered!');
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
