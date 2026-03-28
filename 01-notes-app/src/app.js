// creating the server, only

const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());

/* 
POST
GET
DELETE
PATCH
*/

app.post("/notes", (req, res) => {
  const data = req.body; /* { title, description } */

  noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  /* 

find() => if data:- [{},{}....] or if no data:- []

findOne => if data:- {} or if no data:- null

*/

  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "note deleted successfully",
  });
});
module.exports = app;
