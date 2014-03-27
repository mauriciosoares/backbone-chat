Application.Views = Application.Views || {};

(function() {
  var ENTER_KEY = 13;
  Application.Views.ChatInput = Backbone.View.extend({
    el: '#chat-input',

    events: {
      'keyup': 'sendMessage'
    },

    initialize: function() {
      var chatMessages = new Application.Views.ChatMessages();
    },

    sendMessage: function(event) {
      if(event.which !== ENTER_KEY) {
        return;
      }

    }
  });
} ());
