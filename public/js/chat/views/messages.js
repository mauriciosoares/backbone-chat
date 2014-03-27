Application.Views = Application.Views || {};

(function() {
  Application.Views.Messages = Backbone.View.extend({
    el: '#chat-messages',

    initialize: function() {
      // starts socket.io listeners and stuff
      this.socketIo = new Application.Utils.socketIo();
      this.socketIo.on('newMessage', this.addOne.bind(this));
    },

    addOne: function(event, data) {
      var newMessage = new Application.Views.Message(data).render();
      this.$el.append(newMessage.el);
    }
  });
} ());
