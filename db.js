const mysql = require("mysql2");
require("dotenv").config();

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change if needed
  password: "", // Your MySQL password
  database: "outpass_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db;
