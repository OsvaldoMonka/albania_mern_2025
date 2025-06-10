const express = require("express");
const router = express.Router();
const Qark = require("../models/Qarqet");

router.get("/", async (req, res) => {
  try {
    const qarqet = await Qark.find({});
    res.json(qarqet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
