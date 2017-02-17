angular
  .module('scratchApp', [])
  .controller('appController', appController);

function appController($http) {
  var vm = this;

  // Assign functions so they're accessible in the view

  vm.createNote = createNote;
  vm.getNotes = getNotes;

  // Load all notes with the controller

  getNotes();

  // Define functions

  function createNote(note) {
    // console.log('Note title: ', note.title);
    // console.log('Note content: ', note.content);

    $http.post('/api/notes', note).then(function(res) {
      // console.log('Note created! ', res.data);

      // Add new note to notes in the view
      var note = res.data;
      vm.notes.push(note);
    }, function(err) {
      console.log('Error creating note: ', err.statusText);
    });
  }

  function getNotes() {
    $http.get('/api/notes').then(function(res) {
      vm.notes = res.data;
    }, function(err) {
      console.log('Error retrieving notes: ', err.statusText);
    });
  }
}
