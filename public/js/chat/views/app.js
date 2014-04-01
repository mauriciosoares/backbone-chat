Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.App = Backbone.View.extend({
    el: '#chat',

    initialize: function() {
      this.socketIo = new Application.Utils.SocketIo();
      this.users = new Application.Views.Users({
        socketIo: this.socketIo
      });
      // starts messages functionalities
      new Application.Views.Messages({
        socketIo: this.socketIo
      });

        this.socketIo.on('refreshConnections', function(event, data) {
        console.log(data);
      });
    }
  });
} ());
