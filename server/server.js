require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/api/restaurants", async (req, res) => {
  const results = await db.query("SELECT * FROM restaurants");
  res.status(200).json({
    success: true,
    results,
  });
});
app.post("/api/restaurants", (req, res) => {});
app.get("/api/restaurants/:id", (req, res) => {});
app.put("/api/restaurants/:id", (req, res) => {});
app.delete("/api/restaurants", (req, res) => {});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
