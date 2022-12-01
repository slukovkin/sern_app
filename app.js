const express = require("express");
const dotenv = require("dotenv").config();
const { db_init, sequelize } = require("./db/db_init.js");
const {
  addPriceToDatabase,
  getPriceFromDatabase,
  getLastPriceFromDatabase,
} = require("./controllers/setup.controller.js");
const {
  SetupBase,
  ElectroCounter,
  WaterCounter,
  GazCounter,
} = require("./models/db_modls.js");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.get("/api", getPriceFromDatabase);
app.post("/api/setup", addPriceToDatabase);
app.post("/api/id", getLastPriceFromDatabase);

db_init();

app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`);
  } catch (e) {
    console.log(`Server failed`, e);
  }
});
