import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.resource('company', function() {
		this.route('view', {
			path: '/:id'
		});
		this.route('new');
		this.route('edit', {
			path: '/:id/edit'
		});
	});
	this.resource('user', function() {
		this.route('view', {
			path: '/:id'
		});
		this.route('new');
		this.route('edit', {
			path: '/:id/edit'
		});
	});
	this.resource('survey', function() {
		this.route('view', {
			path: '/:id'
		});
		this.route('new');
		this.route('edit', {
			path: '/:id/edit'
		});
	});
});

export
default Router;