require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/api/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      success: true,
      restaurants: results.rows,
      count: results.rows.length,
    });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/restaurants", (req, res) => {});
app.get("/api/restaurants/:id", async (req, res) => {
  try {
    let restauran = await db.query("SELECT * FROM restaurants WHERE id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      success: true,
      result: restauran.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});
app.put("/api/restaurants/:id", (req, res) => {});
app.delete("/api/restaurants", (req, res) => {});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
