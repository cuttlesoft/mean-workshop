// Import Mongoose

var mongoose = require('mongoose');

// Define model

var Note = mongoose.model('Note', {
  title: String,
  content: String,
});

// Export

module.exports = Note;
