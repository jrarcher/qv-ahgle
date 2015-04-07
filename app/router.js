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
		this.route('edit');
	});
});

export
default Router;