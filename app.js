var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

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

  console.log('teste----------------------------------------');
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
    console.log('disconnect ----------------------------------------');
    console.log(socket.id);
  });
});


/****************
* Starts server
****************/
server.listen(3333);