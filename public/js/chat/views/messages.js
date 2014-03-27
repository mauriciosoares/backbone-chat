Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.Messages = Backbone.View.extend({
    el: '#chat-messages',

    collection: Application.Collections.messages,

    initialize: function() {
      // starts socket.io listeners and stuff
      this.socketIo = new Application.Utils.socketIo();
      this.socketIo.on('newMessage', this.addMessage.bind(this));

      this.collection.on('add', this.addOne, this);
    },

    addMessage: function(event, data) {
      this.collection.add({
        text: data.text
      });
    },

    addOne: function() {
      var newMessage = new Application.Views.Message({
        model: this.collection.models[this.collection.models.length - 1]
      }).render();

      this.$el.append(newMessage.el);
    }
  });
} ());
