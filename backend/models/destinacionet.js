const mongoose = require("mongoose");

const destinacionSchema = new mongoose.Schema({
  id: Number,
  vendi: String,
  pershkrimi: String,
  saved: Boolean,
});

const destinacionetSchema = new mongoose.Schema({
  qark: { type: String, required: true, unique: true },
  destinacionet: [destinacionSchema],
});

module.exports = mongoose.model("Destinacionet", destinacionetSchema);
