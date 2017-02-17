angular
  .module('scratchApp')
  .config(configureRoutes);

function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/shared/home.html',
    })
    .state('notes', {
      url: '/notes',
      templateUrl: '/app/notes/notes.html',
      controller: 'NotesController',
      controllerAs: 'notes',
    });

  $urlRouterProvider.otherwise('/');
}
