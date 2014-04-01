Application.Utils = Application.Utils || {};

(function() {
  'use strict';

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

    this.socket.on('connect', $.proxy(this, 'onSocketConnect'));
  };

  Application.Utils.socketIo.prototype.onSocketConnect = function(data) {
    this.sessionId = this.socket.socket.sessionid;

    this.socket.emit('newUser', {
      id: this.sessionId
    });

    this.emitter.trigger('newUser', this.sessionId);
  };

  Application.Utils.socketIo.prototype.onSocketMessage = function(data) {
    this.emitter.trigger('newMessage', data);
  };
} ());