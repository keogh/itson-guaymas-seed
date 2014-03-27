angular.module('chat-app').directive('chatModal', function () {
  var linker = function (scope, element, attrs) {
    scope.$modal = $('#'+attrs['id']);
    scope.$modal.modal();
  };

  return {
    restrict: 'A',
    templateUrl: 'views/modal.html',
    link: linker
  }
});