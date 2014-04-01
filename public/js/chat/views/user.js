Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.User = Backbone.View.extend({
    tagName: 'div',

    template: Application.Helpers.template('#user-template'),

    initialize: function() {

    },

    render: function() {
      console.log(this.model);
    }
  });
} ());
