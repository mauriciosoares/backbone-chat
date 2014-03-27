Application.Views = Application.Views || {};

(function() {
  Application.Views.Messages = Backbone.View.extend({
    el: '#chat-messages',

    initialize: function() {
      // starts socket.io listeners and stuff
      this.socketIo = new Application.Utils.socketIo();
      this.socketIo.on('newMessage', this.addOne);
    },

    addOne: function(event, data) {
      new Application.Views.Message(data).render();
    }
  });
} ());
