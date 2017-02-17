angular
  .module('scratchApp')
  .service('NotesService', NotesService);

function NotesService($http) {
  var url = '/api/notes';

  var service = {
    getNotes: getNotes,
    create: create,
  };

  return service;

  function getNotes() {
    return $http.get(url);
  }

  function create(note) {
    return $http.post(url, note);
  }
}
