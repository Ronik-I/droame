const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database!');
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/shoots', (req, res) => {
  const { customer_id, date, date_of_shooting, total_time_shoot, type_of_shot, location_of_shoot, bill, advance_payment, dues } = req.body;
  const query = `INSERT INTO Shoots (customer_id, date, date_of_shooting, total_time_shoot, type_of_shot, location_of_shoot, bill, advance_payment, dues) VALUES (${customer_id}, '${date}', '${date_of_shooting}', '${total_time_shoot}', '${type_of_shot}', '${location_of_shoot}', ${bill}, ${advance_payment}, ${dues})`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error inserting data' });
    } else {
      console.log(result);
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
