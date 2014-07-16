define(['jquery', 'sammy', 'app'], function ($, sammy, app) {

	var router = {};

	router.start = function	() {
		var def = $.Deferred();
		var s =	sammy('#app', function() {
			this.get(/\#\/(.*)/, function () {
				var params, action, id;
				app.hide();
				params = this.params['splat'][0].split('/');
				action = params[0] || 'activate';
				id = params[1];
				if (!app.viewModel[action] || typeof app.viewModel[action] !== 'function') {
					throw new Error('Action ' + action + 'does not exist');
				}
				$.when(app.viewModel[action](id))
					.then(app.show)
			});
		});
		s.run('#/');
		def.resolve();
		return def.promise();
	};

	return router;

});