const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  // schema is set of rules that how should our document look like
  title: String,
  description: String,
});

const noteModel = new mongoose.model("note", noteSchema);

module.exports = noteModel;
