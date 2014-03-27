Application.Collections = Application.Collections || {};

(function() {
  var Messages = Backbone.Collections.extend({
    model: Application.Models.Message
  });

  Application.Collections = new Messages();
} ());