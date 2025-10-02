// routes/employees.js
import { Router } from "express";
const router = Router();
import db from "../db.js";

// Get all employees
router.get("/", (req, res) => {
  db.all("SELECT * FROM employees", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Get employee by ID
router.get("/:id", (req, res) => {
  db.get("SELECT * FROM employees WHERE id = ?", [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Employee not found" });
    res.json(row);
  });
});

// Create new employee
router.post("/", (req, res) => {
  const { name, email, position } = req.body;
  if (!name || !email || !position) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.run(
    "INSERT INTO employees (name, email, position) VALUES (?, ?, ?)",
    [name, email, position],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, name, email, position });
    }
  );
});

// Update employee
router.put("/:id", (req, res) => {
  const { name, email, position } = req.body;
  db.run(
    "UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?",
    [name, email, position, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: "Employee not found" });
      res.json({ id: req.params.id, name, email, position });
    }
  );
});

// Delete employee
router.delete("/:id", (req, res) => {
  db.run("DELETE FROM employees WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Employee not found" });
    res.json({ message: "Employee deleted successfully" });
  });
});

export default router;
