// Import API functions

var notes = require('./api/notes');

// Define routes

var routes = function(app) {
  // Notes routes
  app.route('/api/notes/:id?')
    .get(notes.getNotes)
    .post(notes.createNote)
    .delete(notes.deleteNote)
    ;
};

// Export

module.exports = routes;
