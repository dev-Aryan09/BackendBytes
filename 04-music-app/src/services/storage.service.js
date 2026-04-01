require("dotenv").config();
const { ImageKit } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  const result = await client.files.upload({
    file: buffer.toString("base64"),
    fileName: "music_" + Date.now(),
    folder: "complete-backend/music",
  });

  return result;
}

module.exports = { uploadFile };
