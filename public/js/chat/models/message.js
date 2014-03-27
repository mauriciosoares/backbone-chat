Application.Models = Application.Models || {};

(function() {
  'use strict';

  Application.Models.Message = Backbone.Model.extend({
    defaults: {
      text: ''
    }
  });
} ());