angular
  .module('scratchApp', [
    'ui.router',
  ])
  .controller('appController', appController)
  .filter('reverse', reverseFilter);

function appController() {
  var vm = this;

  console.log('Why, hello (world)!');
}

function reverseFilter() {
  return function(input) {
    return input ? input.slice().reverse() : input;
  };
}
