Application.Utils = Application.Utils || {};

(function() {
  'use strict';

  var URL = location.protocol + '//' + location.hostname + ':' + location.port;

  Application.Utils.SocketIo = function() {
    this.initialize();
  };

  Application.Utils.SocketIo.prototype.initialize = function() {
    this.socket = io.connect(URL);

    this.emitter = $({});
    this.on = $.proxy(this.emitter, 'on');

    this.addSocketListeners();
  };

  Application.Utils.SocketIo.prototype.addSocketListeners = function() {
    this.socket.on('incomingMessage', $.proxy(this, 'onSocketMessage'));

    this.socket.on('connect', $.proxy(this, 'onSocketConnect'));

    this.socket.on('refreshConnections', $.proxy(this, 'onSocketRefreshConnections'));
  };

  Application.Utils.SocketIo.prototype.onSocketConnect = function(data) {
    this.sessionId = this.socket.socket.sessionid;

    this.socket.emit('newUser', {
      id: this.sessionId
    });
  };

  Application.Utils.SocketIo.prototype.onSocketMessage = function(data) {
    this.emitter.trigger('newMessage', data);
  };

  Application.Utils.SocketIo.prototype.onSocketRefreshConnections = function(data) {
    this.emitter.trigger('refreshConnections', data);
  };
} ());