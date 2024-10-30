const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const locationRoutes = require("./routes/locationRoutes");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/locations", locationRoutes);

module.exports = app;
