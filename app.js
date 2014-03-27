var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);

  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.render('index.ejs');
});

io.on('connection', function(socket) {
  socket.on('newMessage', function(data) {
    io.sockets.emit('incomingMessage', data);
  });
});

server.listen(3333);