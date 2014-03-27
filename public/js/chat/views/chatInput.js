Application.Views = Application.Views || {};

(function() {
  var ENTER_KEY = 13;
  Application.Views.ChatInput = Backbone.View.extend({
    el: '#chat-input',

    events: {
      'keyup': 'sendMessage'
    },

    initialize: function() {
      this.chatMessages = new Application.Views.Messages();
    },

    sendMessage: function(event) {
      if(event.which !== ENTER_KEY) {
        return;
      }

      var text = $.trim(event.target.value);

      if(!text) {
        return;
      }

      this.chatMessages.addOne(text);
    }
  });
} ());
