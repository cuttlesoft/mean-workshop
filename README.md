# Scratch

This project was created for a workshop on web app development with the MEAN stack. It uses MongoDB, Express, AngularJS, and Node.js, as well as (...other packages...) to create a basic application with (...features...).

## Walkthrough
1. **[Getting Started](#1-getting-started)**
1. **[Basic Server](#2-basic-server)**
1. **[Basic HTML](#3-basic-html)**
1. **[Basic Angular App](#4-basic-angular-app)**
1. **[Basic Model](#5-basic-model)**


### 1. Getting Started

Create project directory and create README:
```
$ mkdir scratch
$ cd scratch
$ touch README.md
```

Initialize `package.json` and install Express:
```
$ npm init
$ npm install --save express
```
_Note: For the "entry point" prompt during the `npm init` process, we are using `server.js` (we will create the file in step **2. The Server**)._

Initialize git repo and create `.gitignore` file:
```
$ git init
$ touch .gitignore

// .gitignore
node_modules
npm-debug.log
```
_Note: Some `.gitignore` examples can be found [here](https://github.com/github/gitignore)._

Initial commit:
```
$ git add .
$ git commit -m "Initial commit"
```


### 2. Basic Server

Create `server.js` with the basics:
```javascript
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
```

Start the server:
```
$ node server.js
```
_Note: Using something like [node-supervisor](https://github.com/petruisfan/node-supervisor) prevents having to stop and restart the server every time changes are made._

Go to [http://localhost:3001](http://localhost:3001) in the browser, and you should see "Hello, World!"


### 3. Basic HTML

Add route to `server.js` to serve `index.html`:
```javascript
app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});
```

Create `public/index.html`:
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Scratch</title>
</head>
<body>
    Hello (again), world!
</body>
</html>
```

Go to [http://localhost:3001/anything](http://localhost:3001/anything) in the browser, and you should now see "Hello (again), World!"

_Note: Unless the initial route created in `server.js` is removed, [http://localhost:3001](http://localhost:3001) will continue to show "Hello, World!" instead of the contents of `index.html`._

_Note: At this point, we also added a [Bootstrap](http://getbootstrap.com/) theme from [Bootswatch](https://bootswatch.com/) and a little bit of HTML, so we would have something nicer to look at as we build._


### 4. Basic Angular App

Create `public/app/app.js`:
```javascript
angular
  .module('scratchApp', [])
  .controller('appController', appController);

function appController() {
  var vm = this;
  console.log('Why, hello (world)!');
}
```

Add `ng-app` and `ng-controller` to `index.html`:
```html
<html lang="en" ng-app="scratchApp">
<head>...</head>
<body ng-controller="appController as app">
    ...
</body>
</html>
```


### 5. Basic Model

Install [Mongoose](http://mongoosejs.com/):
```
$ npm install --save mongoose
```
_Note: Mongoose is an object-document mapper (like an [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) but for a document database) that makes working with MongoDB a lot nicer/easier._

Configure database in `server.js`:
```javascript
var databaseUrl = 'mongodb://localhost/scratch-dev';
mongoose.connect(databaseUrl);
```

Create `notes` model in `server.js`:
```javascript
mongoose.model('Note', {
  title: String,
  content: String,
});
```

Ensure that MongoDB is running:
```
$ mongod
```
_Note: You may have to `sudo mongod`; for more on managing MongoDB processes, see [here](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/)._


<!-- When working on your project, feel free to start from Scratch! -->
