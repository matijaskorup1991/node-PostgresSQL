require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api/restaurants", (req, res) => {
  res.send("test");
});
app.post("/api/restaurants", (req, res) => {});
app.get("/api/restaurants/:id", (req, res) => {});
app.put("/api/restaurants", (req, res) => {});
app.delete("/api/restaurants", (req, res) => {});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
