Application.Views = Application.Views || {};

(function() {
  'use strict';

  Application.Views.Users = Backbone.View.extend({
    el: '#chat-users',

    initialize: function(props) {
      this.socketIo = props.socketIo;

      this.socketIo.on('refreshConnections', $.proxy(this, 'render'));
    },

    render: function(event, data) {

    }
  });
} ());
