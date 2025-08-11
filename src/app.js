const express = require("express");
const connectDB = require("./config/database");
const app = express();

// Middleware for parsing JSON data in request body
app.use(express.json());

// POST request to signup
app.post("/signup", async (req, res) => {
  const user = {
    firstName: "jay mmahakal",
    lastName: "Ujjain",
    emailId: "mahakal@gmail.com",
    password: "Mahakal@12345"
  };

  const query = `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`;

  const connection = connectDB();  // Establish MySQL connection

  console.log('Executing query:', query, [user.firstName, user.lastName, user.emailId, user.password]);  // Debugging query

  connection.query(query, [user.firstName, user.lastName, user.emailId, user.password], (err, results) => {
    if (err) {
      console.log('Error executing query:', err);  // Detailed error message
      res.status(500).send('Error inserting user');
      return;
    }
    console.log('User added successfully:', results);
    res.send('User added successfully');
  });

  connection.end();  // Close connection after query execution
});

// Start the server
app.listen(8080, () => {
  console.log("Server is successfully listening on port 8080...");
});
