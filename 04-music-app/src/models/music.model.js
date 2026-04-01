const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  /* creates relationship b/w collections */
  artist: {
    /* stores ID of another document */
    type: mongoose.Schema.Types.ObjectId,

    /* tells mongoose, this ID belongs to "user" collection */
    ref: "user", // a collection name
    required: true,
  },
});

const musicModel = mongoose.model("music", musicSchema);

module.exports = musicModel;
