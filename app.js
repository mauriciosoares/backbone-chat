var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  _ = require('underscore');

/****************
* Some other configs
****************/
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);

  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.render('index.ejs');
});

// This array contains the connected users in the app
var users = [];


/****************
* Socket.IO stuff
****************/
io.on('connection', function(socket) {
  socket.on('newMessage', function(data) {
    io.sockets.emit('incomingMessage', data);
  });

  socket.on('newUser', function(data) {
    users.push({
      id: socket.id,
      name: ''
    });

    io.sockets.emit('refreshConnections', {
      users: users
    });
  });

  socket.on('disconnect', function(data) {
    var userRemove = _.findWhere(users, {
      id: socket.id
    });

    users.splice(_.indexOf(users, userRemove), 1);

    io.sockets.emit('refreshConnections', {
      users: users
    });
  });

  socket.on('newUsername', function(data) {
    var userUpdate = _.findWhere(users, {
      id: socket.id
    });

    userUpdate.name = data.name;

    io.sockets.emit('refreshConnections', {
      users: users
    });
  });
});


/****************
* Starts server
****************/
server.listen(3333);