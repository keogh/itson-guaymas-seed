angular.module('chat-app').directive('chatModal', function () {
  var linker = function (scope, element, attrs) {
    $('#'+attrs['id']).modal();
  };

  return {
    restrict: 'A',
    templateUrl: 'views/modal.html',
    link: linker
  }
});