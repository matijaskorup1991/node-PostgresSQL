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
      data: {
        restaurants: results.rows,
        count: results.rows.length,
      },
    });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/restaurants", async (req, res) => {
  const { name, location, price_range } = req.body;
  try {
    const result = await db.query(
      "insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [name, location, price_range]
    );

    res.status(201).json({
      data: {
        success: true,
        restaurant: result.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/restaurants/:id", async (req, res) => {
  try {
    let restauran = await db.query("SELECT * FROM restaurants WHERE id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      data: {
        success: true,
        result: restauran.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

app.put("/api/restaurants/:id", async (req, res) => {
  const { name, location, price_range } = req.body;
  try {
    const results = await db.query(
      "UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4 returning *",
      [name, location, price_range, req.params.id]
    );

    res.status(200).json({
      data: {
        success: true,
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});
app.delete("/api/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM restaurants WHERE id=$1", [
      req.params.id,
    ]);

    res.status(204).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
