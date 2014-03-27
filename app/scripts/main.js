angular.module('chat-app').controller('MainCtrl', function ($scope) {
  //window.scope = $scope;

  var socket = io.connect('http://localhost:8080');

  $scope.modalUsername = null;
  $scope.users = [];
  $scope.messages = [];
  $scope.currentUser = {
    username: 'Isaac',
    message: ''
  }

  $scope.send = function () {
    if ($scope.currentUser.message === '') return;
    socket.emit('msg', $scope.currentUser.message);
    $scope.messages.push({
      username: $scope.currentUser.username,
      content: $scope.currentUser.message
    });
    $scope.currentUser.message = '';
  }

  $scope.saveUsername = function () {
    var username = $scope.modalUsername;
    socket.emit('username', username);
    $scope.currentUser.username = username;
    $scope.users.push({username: username});
    $scope.modalUsername = null;
    $scope.$modal.modal('hide');
  }

  // Socket.io Listeners
  socket.on('users', function (users) {
    //console.log('users', users);
    $scope.users = [];
    angular.forEach(users, function (user) {
      $scope.users.push({username: user});
    });
    $scope.$apply();
  });

  socket.on('msg', function (username, msg) {
    if (username === $scope.currentUser.username) return;
    $scope.messages.push({
      username: username,
      content: msg
    });
    $scope.$apply();
  });
});