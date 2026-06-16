const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB").then(() => console.log("MongoDB connected!"));

// Schema definition
const studentSchema = new mongoose.Schema({
  id: Number,
  name: String
});

// Model creation
const Student = mongoose.model("Student", studentSchema);

// GET - Retrieve all students
app.get("/data", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

// GET - Retrieve student by ID
app.get("/data/:id", async (req, res) => {
  const data = await Student.findOne({ id: Number(req.params.id) });
  res.json(data);
});

// POST - Create new student
app.post("/data", async (req, res) => {
  const newData = new Student(req.body);
  const saved = await newData.save();
  res.json(saved);
});

// PUT - Update student
app.put("/data/:id", async (req, res) => {
  const updated = await Student.findOneAndUpdate(
    { id: Number(req.params.id) },
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE - Delete student
app.delete("/data/:id", async (req, res) => {
  const deleted = await Student.findOneAndDelete({
    id: Number(req.params.id)
  });
  res.json(deleted);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
