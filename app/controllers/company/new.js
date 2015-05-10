import Ember from 'ember';

export
default Ember.Controller.extend({
	phoneType:null,
	phoneNumber:null,
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
			var num = this.get('phoneNumber'),
			type = this.get('phoneType'),
			model = this.get('model');

			var newPhone = this.store.createRecord('phone',{
				num: num,
				type:type,
				country:'US',
				ext:null
			});
			model.get('phone').pushObject(newPhone);
			this.set('phoneNumber', null);
			this.set('phoneType', null);
		},
		removePhone:function(){

		}
	}
});