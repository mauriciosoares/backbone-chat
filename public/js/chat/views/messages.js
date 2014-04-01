Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.Messages = Backbone.View.extend({
    el: '#chat-messages',

    collection: Application.Collections.messages,

    initialize: function() {
      // starts input for sending messages
      new Application.Views.ChatInput();

      // starts socket.io listeners and stuff
      this.socketIo = new Application.Utils.socketIo();
      this.socketIo.on('newMessage', this.addMessage.bind(this));
    },

    addMessage: function(event, data) {
      this.collection.add({
        text: data.text
      });

      this.addOne(_.last(this.collection.models));
    },

    addOne: function(model) {
      var newMessage = new Application.Views.Message({
        model: model
      }).render();

      this.$el.append(newMessage.el);
    }
  });
} ());
