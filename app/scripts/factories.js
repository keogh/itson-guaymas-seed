angular.module('chat-app').factory('usersFactory', function () {
  return [
    {username: 'Isaac'},
    {username: 'Alberto'},
    {username: 'Miguel'},
    {username: 'Roberto'},
    {username: 'Jorge'},
    {username: 'Manuel'},
    {username: 'Jesus'}
  ]
});

angular.module('chat-app').factory('messagesFactory', function () {
  return [
    {
      username: 'Isaac',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
    },
    {
      username: 'Alberto',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
    }
  ];
});