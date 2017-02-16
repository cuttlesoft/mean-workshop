angular
  .module('scratchApp', [])
  .controller('appController', appController);

function appController() {
  var vm = this;

  console.log('Why, hello (world)!');
}
