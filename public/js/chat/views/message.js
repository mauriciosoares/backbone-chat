Application.Views = Application.Views || {};

(function() {
  Application.Views.Message = Backbone.View.extend({
    tagName: 'div',

    template: Application.Helpers.template('#message-template'),

    initialize: function(props) {
      this.text = props.text;
    },

    render: function() {
      var html = this.template({
        text: this.text
      });

      this.$el.append(html);

      return this;
    }
  });
} ());