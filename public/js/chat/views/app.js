Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.App = Backbone.View.extend({
    el: '#chat',

    initialize: function() {
      // starts messages functionalities
      new Application.Views.Messages();
    }
  });
} ());
