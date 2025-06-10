// seed/qark.js

const mongoose = require("mongoose");
const Qark = require("../models/Qarqet");
require("dotenv").config();

const baseUrl = "http://localhost:5000/images";

async function seedQarqet() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  try {
    await Qark.deleteMany({});

    await Qark.insertMany([
      {
        name: "Tirana",
        description: "The capital city of Albania, vibrant and dynamic.",
        image: `${baseUrl}/tirana.jpg`,
      },
      {
        name: "Berat",
        description: "A historic city known for its architecture.",
        image: `${baseUrl}/berat.jpg`,
      },
      {
        name: "Diber",
        description: "Famous for its natural beauty and mountains.",
        image: `${baseUrl}/diber.jpg`,
      },
      {
        name: "Durres",
        description: "A coastal city with ancient ruins.",
        image: `${baseUrl}/durres.jpg`,
      },
      {
        name: "Elbasan",
        description: "Known for its rich history and traditions.",
        image: `${baseUrl}/elbasan.jpg`,
      },
      {
        name: "Fier",
        description: "A city with archaeological sites and cultural heritage.",
        image: `${baseUrl}/fier.jpg`,
      },
      {
        name: "Gjirokaster",
        description: "A UNESCO World Heritage site with stunning architecture.",
        image: `${baseUrl}/gjirokaster.jpg`,
      },
      {
        name: "Korce",
        description: "Famous for its cultural festivals and traditions.",
        image: `${baseUrl}/korce.jpg`,
      },
      {
        name: "Kukes",
        description: "Known for its breathtaking landscapes and lakes.",
        image: `${baseUrl}/kukes.jpg`,
      },
      {
        name: "Shkoder",
        description: "A city with a rich history and beautiful landscapes.",
        image: `${baseUrl}/shkoder.jpg`,
      },
      {
        name: "Vlore",
        description: "A coastal city known for its beaches and history.",
        image: `${baseUrl}/vlore.jpg`,
      },
      {
        name: "Lezhe",
        description:
          "Known for its historical significance and beautiful landscapes.",
        image: `${baseUrl}/lezhe.jpg`,
      },
    ]);

    console.log("✅ Qark data seeded successfully.");
  } catch (err) {
    console.error("❌ Error seeding Qark data:", err);
  }
}

module.exports = seedQarqet;
