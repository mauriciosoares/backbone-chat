Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.App = Backbone.View.extend({
    el: '#chat',

    initialize: function() {
      // starts input for sending messages
      new Application.Views.ChatInput();

      // starts messages functionalities
      new Application.Views.Messages();
    }
  });
} ());
