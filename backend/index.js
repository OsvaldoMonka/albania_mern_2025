const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const qarqetRoutes = require("./routes/qarqet");
const destinacionetRoutes = require("./routes/destinacionet");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

app.use("/api/qarqet", qarqetRoutes);
app.use("/api/destinacionet", destinacionetRoutes);
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
