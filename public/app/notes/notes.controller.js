angular
  .module('scratchApp')
  .controller('NotesController', NotesController);

function NotesController(NotesService) {
  var vm = this;

  // Assign functions so they're accessible in the view

  vm.create = createNote;
  vm.getNotes = getNotes;

  // Load all notes with the controller

  getNotes();

  // Define functions

  function getNotes() {
    NotesService.getNotes().then(function(res) {
      vm.notes = res.data;
    }, function(err) {
      console.log('Error retrieving notes: ', err.statusText);
    });
  }

  function createNote(note) {
    // console.log('Note title: ', note.title);
    // console.log('Note content: ', note.content);
    NotesService.create(note).then(function(res) {
      // Add new note to notes in the view
      vm.notes.push(res.data);
    }, function(err) {
      console.log('Error creating note: ', err.statusText);
    });
  }
}
