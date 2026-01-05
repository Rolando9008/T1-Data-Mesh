// src/server.js

const path = require("path");
const express = require("express");

const app = express();

// 1. Configuration
const PORT = process.env.PORT || 3000;

// 2. Static files (public folder)
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

// 3. Basic route (optional health check)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", app: "OTC-DATAMESH" });
});

// 4. Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
