// creating the server, only

const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

/*
user must provide title & description,
so what is happening data is coming from frontend to backend, 
hence, we need an API
*/
/* POST, /notes */
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  console.log(notes);

  res.status(201).json({
    message: "note created successfully",
  });
});

/* GET, /notes */
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

/* DELETE, /notes/:index */
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  console.log("index:", index);

  delete notes[index];

  res.status(200).json({
    message: "note deleted successfully",
  });
});

/* PATCH, /notes/:index */
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;

  const description = req.body.description; // this comes from frontend

  notes[index].description = description; // updating the previous description we have

  res.status(200).json({
    message: "note updated successfully",
  });
});

module.exports = app;
