import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		return this.store.createRecord('company');
	},
	actions:{
		saveCompany:function(){

		},
		deleteCompany:function(){
			
		}
	}
});
