import Ember from 'ember';

export
default Ember.Route.extend({
	model: function(params) {
		return this.store.find('company', params.id);
	},
	setupController: function(controller, model) {
		controller.set('model', model);
		controller.set('isEditing', false);
	}
});