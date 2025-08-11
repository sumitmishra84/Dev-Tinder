const mysql = require('mysql2');

const connectDB = () => {
  const connection = mysql.createConnection({
    host: 'localhost',  // Change if you're using a remote MySQL server
    user: 'root',       // MySQL username
    password: 'Sumit@12345',  // MySQL password
    database: 'DEVTENDER'  // Database name
  });

  // Attempt to connect to MySQL
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      return;
    }
    console.log('Database connection established...');
  });

  return connection;
};

module.exports = connectDB;
