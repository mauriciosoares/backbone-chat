Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.App = Backbone.View.extend({
    el: '#chat',

    initialize: function() {
      // gets socketIo instance
      this.socketIo = new Application.Utils.SocketIo();

      // starts messages functionalities
      new Application.Views.Messages({
        socketIo: this.socketIo
      });

      // starts view of users
      this.users = new Application.Views.Users({
        socketIo: this.socketIo
      });

      this.username = new Application.Views.UsernameInput({
        socketIo: this.socketIo
      });
    }
  });
} ());
