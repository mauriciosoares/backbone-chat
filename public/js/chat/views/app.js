Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.App = Backbone.View.extend({
    el: '#chat',

    initialize: function() {
      // starts input for sending messages
      new Application.Views.ChatInput();

      // starts socket.io listeners and stuff
      new Application.Utils.socketIo();
    }
  });
} ());
