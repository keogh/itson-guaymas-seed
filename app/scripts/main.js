angular.module('chat-app').controller('MainCtrl', function ($scope) {
  $scope.users = [
    {username: 'Isaac'},
    {username: 'Alberto'},
    {username: 'Miguel'},
    {username: 'Roberto'},
    {username: 'Jorge'},
    {username: 'Manuel'},
    {username: 'Jesus'}
  ];

  $scope.messages = [];
  $scope.currentUser = {
    username: 'Isaac',
    message: ''
  }

  $scope.send = function () {
    if ($scope.currentUser.message === '') return;
    // TODO: Send message to server
    $scope.messages.push({
      username: $scope.currentUser.username,
      content: $scope.currentUser.message
    });
    $scope.currentUser.message = '';
  }
});