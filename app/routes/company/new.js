import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		// var addy = this.store.createRecord('address'),
		// company = this.store.createRecord('company');
		// company.set('address', addy);
		// return company;
		return this.store.createRecord('company',{
			address:this.store.createRecord('address')
		})
	}
});
