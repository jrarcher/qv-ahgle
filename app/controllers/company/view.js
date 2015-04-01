import Ember from 'ember';

export default Ember.Controller.extend({
	isEditing:false,
	actions:{
		toggleEditing:function(){
			this.toggleProperty('isEditing');
		},
		saveCompany:function(){
			window.console.log('SAVING');
		}
	}
});
