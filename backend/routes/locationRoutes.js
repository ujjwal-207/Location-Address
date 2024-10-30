const express = require("express");
const router = express.Router();
const {
  saveLocation,
  getUserLocations,
  deleteLocation,
} = require("../controllers/locationController");
const authMiddleware = require("../middleware/auth");

// Route to save a new location
router.post("/save", authMiddleware, saveLocation);

// Route to get locations for a specific user
router.get("/:userId", authMiddleware, getUserLocations);

// Route to delete a location by ID
router.delete("/:id", authMiddleware, deleteLocation);

module.exports = router;
