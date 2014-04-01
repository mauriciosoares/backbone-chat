Application.Views = Application.Views || {};

(function() {
  'use strict';

  var ENTER_KEY = 13;

  Application.Views.ChatInput = Backbone.View.extend({
    el: '#chat-input',

    events: {
      'keyup': 'sendMessage'
    },

    initialize: function(props) {
      this.socketIo = props.socketIo;
    },

    sendMessage: function(event) {
      if(event.which !== ENTER_KEY) {
        return;
      }

      var text = $.trim(event.target.value);
      event.target.value = '';

      if(!text) {
        return;
      }

      this.socketIo.socket.emit('newMessage', {
        text: text
      });
    }
  });
} ());
