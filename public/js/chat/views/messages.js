Application.Views = Application.Views || {};

(function() {
  Application.Views.Messages = Backbone.View.extend({
    el: '#chat-messages',

    initialize: function() {
      // starts socket.io listeners and stuff
      this.socketIo = new Application.Utils.socketIo();
      this.socketIo.on('newMessage', this.onNewMessage);
    },

    onNewMessage: function(event, data) {
      console.log(data);
    },

    addOne: function(text) {
      new Application.Views.Message({text: text}).render();
    }
  });
} ());
