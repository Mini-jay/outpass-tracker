require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Sample Route
app.get("/", (req, res) => {
  res.send("Outpass Tracker API is Running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const outpassRoutes = require("./routes/outpassroutes");
app.use("/api", outpassRoutes);
