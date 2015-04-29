import Ember from 'ember';

export
default Ember.Controller.extend({
	actions: {
		saveCompany: function() {
			var that = this,
			comp = this.get('model');
			// comp.save().then(function() {
			// 	that.transitionToRoute('company.index');
			// });
			that.transitionToRoute('company.index');
		},
		deleteCompany: function() {
			// this.store.deleteRecord(this.get('model.address'));
			var comp = this.get('model');
			this.store.deleteRecord(comp);
			this.transitionToRoute('company.index');
		},
		addPhone:function(){
			
		}
	}
});