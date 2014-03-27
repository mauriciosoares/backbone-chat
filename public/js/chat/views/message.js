Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.Message = Backbone.View.extend({
    tagName: 'div',

    template: Application.Helpers.template('#message-template'),

    initialize: function() {

    },

    render: function() {
      var html = this.template({
        text: this.model.get('text')
      });

      this.$el.append(html);

      return this;
    }
  });
} ());