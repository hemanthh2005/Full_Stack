const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Sample data
const data = [
  { id: 1, name: "Roshan" },
  { id: 2, name: "Santhosh" },
  { id: 3, name: "Hemanth Gowda" },
  { id: 4, name: "Kishan" }
];

// GET - Home route
app.get("/", (req, res) => {
  res.send("Home");
});

// GET - Retrieve all data
app.get("/api/data", (req, res) => {
  res.json(data);
});

// POST - Add new data
app.post('/api/data', (req, res) => {
  const nItem = req.body;
  data.push(nItem);
  res.json(data);
});

// Start server
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server running on port:", PORT);
});
