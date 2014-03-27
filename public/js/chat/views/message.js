Application.Views = Application.Views || {};

(function() {
  Application.Views.Message = Backbone.View.extend({
    initialize: function(props) {
      this.text = props.text;
    },

    render: function() {
      console.log(this.text);
    }
  });
} ());