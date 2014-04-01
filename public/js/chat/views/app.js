Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.App = Backbone.View.extend({
    el: '#chat',

    initialize: function() {
      this.socketIo = new Application.Utils.socketIo();
      this.socketIo.on('refreshConnections', function(event, data) {
        console.log(data);
      });

      // starts messages functionalities
      new Application.Views.Messages({
        socketIo: this.socketIo
      });
    }
  });
} ());
