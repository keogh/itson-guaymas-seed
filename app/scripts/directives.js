angular.module('chat-app')
  .directive('chatModal', function () {
    var linker = function (scope, element, attrs) {
      scope.$modal = $('#'+attrs['id']);
      scope.$modal.modal();
    };

    return {
      restrict: 'A',
      templateUrl: 'views/modal.html',
      link: linker
    }
  })
  .directive('scrollItem', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {
        if (scope.$last) {
          scope.$emit('Finished');
        }
      }
    }
  })
  .directive('scrollIf', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {
        scope.$on('Finished', function () {
          element.scrollTop(element.outerHeight());
        });
      }
    }
  });
