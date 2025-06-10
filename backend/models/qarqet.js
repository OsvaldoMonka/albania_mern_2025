// models/Qarqet.js

const mongoose = require("mongoose");

const qarkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Qark", qarkSchema);
