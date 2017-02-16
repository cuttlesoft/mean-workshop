// Basic Express app

var express = require('express');
var app = express();

var mongoose = require('mongoose');

// Basic configuration

var port = process.env.PORT || 3001;
var databaseUrl = 'mongodb://localhost/scratch-dev';

mongoose.connect(databaseUrl);

// Model(s)

var Note = mongoose.model('Note', {
  title: String,
  content: String,
});

// Basic routes

app
  .route('/api/notes')

  .get(function (req, res) {
    Note.find(function(err, notes) {
      if (err) res.send(err);
      res.json(notes);
    });
  });

// Set the static files location + index

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile('index.html');
});

// Start app

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
