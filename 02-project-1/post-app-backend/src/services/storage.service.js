require("dotenv").config();
const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

/* uploading file to the image kit */
async function uploadFile(buffer) {
  const result = await imagekit.files.upload({
    file: buffer.toString("base64"), // required
    fileName: "image.jpg",
  });

  return result;
}

module.exports = uploadFile;
