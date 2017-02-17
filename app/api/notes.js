// Import model

var Note = require('../models/note');

// Define functions for API

function getNotes(req, res) {
  Note.find(function(err, notes) {
    if (err) res.send(err);
    res.json(notes);
  });
}

function createNote(req, res) {
  var note = {
    title: req.body.title,
    content: req.body.content,
  };

  Note.create(note, function(err, note) {
    if (err) res.send(err);
    res.json(note);
  });
}

function deleteNote(req, res) {
  var noteId = req.params.id;

  Note.remove({ _id: noteId }, function(err, note) {
    if (err) res.send(err);
    res.json(note);
  });
}

// Export

module.exports = {
  getNotes: getNotes,
  createNote: createNote,
  deleteNote: deleteNote,
};
