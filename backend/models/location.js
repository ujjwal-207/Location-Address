const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  address: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
});

module.exports = mongoose.model("Location", LocationSchema);
