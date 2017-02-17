// Import API functions

var notes = require('./api/notes');

// Define routes

var routes = function(app) {
  // Notes routes
  app.route('/api/notes')
    .get(notes.getNotes)
    .post(notes.createNote)
    ;
};

// Export

module.exports = routes;
