angular
  .module('scratchApp')
  .controller('NotesController', NotesController);

function NotesController(NotesService) {
  var vm = this;

  // Assign functions so they're accessible in the view

  vm.getNotes = getNotes;
  vm.createNote = createNote;
  vm.deleteNote = deleteNote;

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
    NotesService.createNote(note).then(function(res) {
      // Add new note to notes in the view
      vm.notes.push(res.data);
    }, function(err) {
      console.log('Error creating note: ', err.statusText);
    });
  }

  function deleteNote(note) {
    // console.log('Note id: ', note._id);
    NotesService.deleteNote(note._id).then(function(res) {
      // Re-get all notes to update list; not the most efficient way, but easy
      getNotes();
    }, function(err) {
      console.log('Error deleting note: ', err.statusText);
    });
  }
}
