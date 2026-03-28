const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,  // email must be unique
  },
  password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
