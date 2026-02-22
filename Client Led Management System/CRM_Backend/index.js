// Import express
const express = require("express");
const cors = require("cors");

// Create app
const app = express();

// Port
const PORT = 5000;

// Middleware
app.use(cors());              // VERY IMPORTANT for browser
app.use(express.json());      // Parse JSON bodies

// Routes
const leadRoutes = require("./routes/leads");
app.use("/api/leads", leadRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("CRM Backend is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});