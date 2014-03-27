angular.module('chat-app')
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