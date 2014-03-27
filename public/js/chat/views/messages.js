Application.Views = Application.Views || {};

(function() {
  Application.Views.Messages = Backbone.View.extend({
    el: '#chat-messages',

    addOne: function(text) {
      new Application.Views.Message({text: text}).render();
    }
  });
} ());
