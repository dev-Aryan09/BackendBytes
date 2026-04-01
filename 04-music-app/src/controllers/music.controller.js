require("dotenv").config();
const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadFile } = require("../services/storage.service");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {
  const { title } = req.body;
  const { buffer } = req.file;

  const result = await uploadFile(buffer);

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  res.status(200).json({
    message: "music created successfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
}

async function createAlbum(req, res) {
  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    musics,
    artist: req.user.id,
  });

  res.status(200).json({
    message: "album created successfully",
    music: {
      id: album._id,
      title: album.title,
      music: album.musics,
      artist: album.artist,
    },
  });
}

async function getAllMusics(req, res) {
  /* populate() will provide is details about artist */
  /* because we have established a relationship in, music model */
  const musics = await musicModel.find().skip(3).limit(10).populate("artist");

  res.status(200).json({
    message: "fetched all music successfully",
    musics,
  });
}

async function getAllAlbums(req, res) {
  const albums = await albumModel
    .find()
    .select("title artist")
    .populate("artist");

  res.status(200).json({
    message: "Albums fetched successfully",
    albums,
  });
}

async function getAllAlbumById(req, res) {
  const albumId = req.params.albumId
  const album = await albumModel.findById(albumId);

  return res.status(200).json({
    message: "album fetched successfully",
    album,
  });
}

module.exports = {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
  getAllAlbumById,
};
