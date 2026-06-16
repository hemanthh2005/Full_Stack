const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

// Schema definition
const studentSchema = new mongoose.Schema({
  id: Number,
  name: String
});

// Model creation
const Student = mongoose.model("Student", studentSchema);

// Root route
app.get("/", (req, res) => {
  res.send("Student API is running...");
});

// CREATE - Add new student
app.post("/data", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const saved = await newStudent.save();
    res.json(saved);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

// READ ALL - Get all students
app.get("/data", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).send("Error");
  }
});

// READ ONE - Get student by ID
app.get("/data/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ id: Number(req.params.id) });
    res.json(student);
  } catch (err) {
    res.status(500).send("Error");
  }
});

// UPDATE - Modify student
app.put("/data/:id", async (req, res) => {
  try {
    const updated = await Student.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).send("Error");
  }
});

// DELETE - Remove student
app.delete("/data/:id", async (req, res) => {
  try {
    const deleted = await Student.findOneAndDelete({
      id: Number(req.params.id)
    });
    res.json(deleted);
  } catch (err) {
    res.status(500).send("Error");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
