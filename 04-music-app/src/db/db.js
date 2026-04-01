require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB has successfully connected");
  } catch (err) {
    console.log("DB connection error", err);
  }
}

module.exports = connectDB;
