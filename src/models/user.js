const connectDB = require('./connectDB');  // connectDB function import

// Insert User Function
const insertUser = (firstName, emailId, password, age, gender) => {
  const connection = connectDB();  // Establish connection

  const query = 'INSERT INTO users (firstName, emailId, password, age, gender) VALUES (?, ?, ?, ?, ?)';
  connection.execute(query, [firstName, emailId, password, age, gender], (err, results) => {
    if (err) {
      console.error('Error inserting user:', err);
      return;
    }
    console.log('User inserted with ID:', results.insertId);
  });

  connection.end();  // Close the connection after query execution
};

module.exports = { insertUser };
