import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		return this.store.createRecord('user',{
			// address:this.store.createRecord('address')
		});
	}
});