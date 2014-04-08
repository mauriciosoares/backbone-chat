Application.Views = Application.Views || {};

(function() {
	var ENTER_KEY = 13;

	Application.Views.UsernameInput = Backbone.View.extend({
		el: '#username-input',

		events: {
			'keyup': 'updateName'
		},

		updateName: function(event) {
			if(event.which != ENTER_KEY) {
				return;
			}

			var newUsername = $.trim(event.target.value);

			if(!newUsername) {
				return;
			}

			console.log(newUsername);
		}
	});
} ());
