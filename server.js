const express = require("express");
const sql = require("mssql");

const app = express();

// SQL CONFIG (replace IP with your SQL EC2 private IP)
const config = {
  user: "SA",
  password: "NewPass@123",
  server: "13.201.84.164", // 👈 SQL EC2 PRIVATE IP
  database: "DemoDB",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Home route
app.get("/", (req, res) => {
  res.send("Node API connected to SQL 🚀");
});

// FETCH DATA FROM DB
app.get("/employees", async (req, res) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query("SELECT * FROM Employees");

    res.json(result.recordset);
  } catch (err) {
    console.error("SQL ERROR:", err);  // 👈 IMPORTANT
    res.status(500).send(err.message); // 👈 show real error
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});