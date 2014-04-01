Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.User = Backbone.View.extend({
    tagName: 'div',

    template: Application.Helpers.template('#user-template'),

    initialize: function() {

    },

    render: function() {
      var html = this.template(this.model);

      this.$el.append(html);

      return this;
    }
  });
} ());
