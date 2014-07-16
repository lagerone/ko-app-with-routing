(function () {
	
	require.config({
		paths: {
			'jquery': '../bower_components/jquery/dist/jquery',
			'knockout': '../bower_components/knockoutjs/dist/knockout',
			'sammy': '../bower_components/sammy/lib/sammy'
		}
	});

	require(['router', 'app'], function (router, app) {
		$.when(app.start())
			.then(function () {
				return router.start();
			});
	});

}());