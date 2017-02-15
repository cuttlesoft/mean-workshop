// Basic Express app

var express = require('express');
var app = express();

// Basic configuration

var port = process.env.PORT || 3001;

// Basic route

app.get('/', function(req, res) {
  res.send('Hello, World!');
});

// Start app

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
