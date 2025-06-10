const express = require("express");
const router = express.Router();
const Destinacionet = require("../models/destinacionet");

// GET all destinacionet
router.get("/", async (req, res) => {
  try {
    const allDestinacionet = await Destinacionet.find({});
    res.json(allDestinacionet);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH to update saved status for a destination by qark and id
router.patch("/:qark/:id/save", async (req, res) => {
  const { qark, id } = req.params;
  const { saved } = req.body; // expected boolean

  if (typeof saved !== "boolean") {
    return res.status(400).json({ error: "Saved must be a boolean" });
  }

  try {
    // Find the document for the qark
    const doc = await Destinacionet.findOne({ qark });

    if (!doc) {
      return res.status(404).json({ error: "Qark not found" });
    }

    // Find the destination by id inside destinacionet array
    const destIndex = doc.destinacionet.findIndex(
      (dest) => dest.id === Number(id)
    );

    if (destIndex === -1) {
      return res.status(404).json({ error: "Destination not found" });
    }

    // Update the saved field
    doc.destinacionet[destIndex].saved = saved;

    // Save the document
    await doc.save();

    res.json({
      message: "Saved status updated",
      destinacionet: doc.destinacionet,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
