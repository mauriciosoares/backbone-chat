Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.App = Backbone.View.extend({
    el: '#chat',

    initialize: function() {
      this.socketIo = new Application.Utils.socketIo();

      // starts messages functionalities
      new Application.Views.Messages({
        socketIo: this.socketIo
      });
    }
  });
} ());
