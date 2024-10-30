const Location = require("../models/Location");

// Save a new location
exports.saveLocation = async (req, res) => {
  const { userId, address, coordinates } = req.body;
  try {
    const newLocation = await Location.create({ userId, address, coordinates });
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ message: "Failed to save location" });
  }
};

// Get locations for a user
exports.getUserLocations = async (req, res) => {
  const { userId } = req.params;
  try {
    const locations = await Location.find({ userId });
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve locations" });
  }
};

// Delete a location by ID
exports.deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    await Location.findByIdAndDelete(id);
    res.status(200).json({ message: "Location deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete location" });
  }
};
