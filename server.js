// Basic Express app

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = require('./config/db');
var routes = require('./app/routes');

// Basic configuration

mongoose.connect(db.url);

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Basic routes

routes(app);

// Static files directory
app.use(express.static(__dirname + '/public'));

// Angular app
app.get('*', function(req, res) {
  res.sendFile('index.html');
});

// Start app

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
