define(['jquery', 'knockout', 'router'], function ($, ko, router) {

	var ViewModel = function (data) {
		this.name = ko.observable();
		this.startUrl = '#/';
		this.editUrl = '#/edit/1234';
		this.statusText = ko.observable();
	};

	ViewModel.prototype.activate = function () {
		var def = $.Deferred();
		setTimeout(function () {
			this.name('This is the start page');
			this.statusText('ViewModel is activated');
			def.resolve();
		}.bind(this), 500);
		return def.promise();
	};

	ViewModel.prototype.edit = function (id) {
		var def = $.Deferred();
		setTimeout(function () {
			this.name('This is the edit page');
			this.statusText('Edit was called with id ' + id);
			def.resolve();
		}.bind(this), 500);
		return def.promise();
	};

	return ViewModel;
});