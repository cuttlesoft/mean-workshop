angular
  .module('scratchApp')
  .service('NotesService', NotesService);

function NotesService($http) {
  var url = '/api/notes';

  var service = {
    getNotes: getNotes,
    createNote: createNote,
    deleteNote: deleteNote,
  };

  return service;

  function getNotes() {
    return $http.get(url);
  }

  function createNote(note) {
    return $http.post(url, note);
  }

  function deleteNote(id) {
    return $http.delete(`${url}/${id}`);
  }
}
