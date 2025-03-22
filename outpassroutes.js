const express = require("express");
const router = express.Router();
const db = require("../db");

// Parent requests an outpass
router.post("/request-outpass", (req, res) => {
  const { parent_id, student_name, hostel_number, reason, destination, date_from, date_to, out_time, in_time } = req.body;

  const query = `INSERT INTO outpasses 
    (parent_id, student_name, hostel_number, reason, destination, date_from, date_to, out_time, in_time, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`;

  db.query(query, [parent_id, student_name, hostel_number, reason, destination, date_from, date_to, out_time, in_time], 
    (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.status(201).json({ message: "Outpass request submitted successfully!" });
  });
});

module.exports = router;
