// Basic Express app

var express = require('express');
var app = express();

var mongoose = require('mongoose');

// Basic configuration

var port = process.env.PORT || 3001;
var databaseUrl = 'mongodb://localhost/scratch-dev';

mongoose.connect(databaseUrl);

// Model(s)

mongoose.model('Note', {
  title: String,
  content: String,
});

// // Basic route
//
// app.get('/', function(req, res) {
//   res.send('Hello, World!');
// });

// Set the static files location + index

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile('index.html');
});

// Start app

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
