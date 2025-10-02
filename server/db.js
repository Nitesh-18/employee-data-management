// db.js
import sqlite3 from "sqlite3";
sqlite3.verbose();

const db = new sqlite3.Database("./employees.db", (err) => {
  if (err) {
    console.error("❌ Error connecting to database:", err.message);
  } else {
    console.log("✅ Connected to SQLite database.");
  }
});

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS employees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  position TEXT NOT NULL
)`);

export default db;
