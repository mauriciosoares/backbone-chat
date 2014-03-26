var express = require('express'),
  app = express(),
  server = require('http').createServer(app);

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);

  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.render('index.ejs');
});

server.listen(3333);