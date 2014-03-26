var Application = Application || {};

Application.Models = {};
Application.Collections = {};
Application.Views = {};
Application.Helpers = {};

// helper for defining templates on views
Application.Helpers.template = function(selector) {
  return _.template($(selector).html());
};

// kicks things off
$(function() {
  new Application.Views.App();
});
