define(['knockout', 'ViewModel'], function (ko, ViewModel) {

	var app = {},
		appId = 'app';

	app.hide = function () {
		$('#' + appId).hide();
	};

	app.show = function () {
		$('#' + appId).fadeIn();
	};
	
	app.viewModel = undefined;

	app.start = function () {
		app.viewModel = new ViewModel();
		return $.when(app.viewModel.activate())
			.then(function () {
				ko.applyBindings(app.viewModel, document.getElementById(appId));
			});
	};

	return app;

});