const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB successfully connected");
  } catch (err) {
    console.err("DB connection error", err);
  }
}

module.exports = connectDB;
