const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: String,
  caption: String,
});

/* 'post' will be the name of collection in the DB */
const postModel = new mongoose.model("post", postSchema);

module.exports = postModel;
