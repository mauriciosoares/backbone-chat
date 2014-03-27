Application.Utils = Application.Utils || {};

(function() {
  var URL = location.protocol + '//' + location.hostname + ':' + location.port;

  Application.Utils.socketIo = function() {
    this.initialize();
  };

  Application.Utils.socketIo.prototype.initialize = function() {
    this.socket = io.connect(URL);

    this.emitter = $({});
    this.on = $.proxy(this.emitter, 'on');

    this.addSocketListeners();
  };

  Application.Utils.socketIo.prototype.addSocketListeners = function() {
    this.socket.on('incomingMessage', $.proxy(this, 'onSocketMessage'));
  };

  Application.Utils.socketIo.prototype.onSocketMessage = function(data) {
    this.emitter.trigger('newMessage', data);
  };
} ());