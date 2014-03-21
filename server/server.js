var io = require("socket.io").listen(8080);
var users = [];

io.sockets.on('connection', function (socket) {
  socket.on('username', function (username) {
    users.push(username);
    io.sockets.emit('users', users);

    socket.on('msg', function (msg) {
      io.sockets.emit('msg', username, msg);
    });

    socket.on('disconnect', function () {
      users.splice(users.indexOf(username), 1);
      io.sockets.emit('users', users);
    });
  });
});