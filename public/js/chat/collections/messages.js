Application.Collections = Application.Collections || {};

(function() {
  var Messages = Backbone.Collection.extend({
    model: Application.Models.Message
  });

  Application.Collections = new Messages();
} ());