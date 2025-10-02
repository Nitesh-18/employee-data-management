// server.js
import express, { json } from "express";
import cors from "cors";
import employeesRouter from "./routes/employees.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use("/api/employees", employeesRouter);

// Test Route
app.get("/api/health", (req, res) => {
  res.json({ status: "✅ API is working fine!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
