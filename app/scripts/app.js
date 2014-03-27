angular.module('chat-app', []);

angular.module('chat-app').directive('chatModal', function () {
    var linker = function (scope, element, attrs) {
      
    };

    return {
      restrict: 'A',
      templateUrl: 'views/modal.html',
      link: linker
    }
  });