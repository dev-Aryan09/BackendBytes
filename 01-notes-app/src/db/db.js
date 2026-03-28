const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://backend:B0ytLSfPWnOPIQkH@complete-backend.x0garwu.mongodb.net/halley",  // URI of our cluster / database name
  );

  console.log("connect to DB");
}

module.exports = connectDB;
