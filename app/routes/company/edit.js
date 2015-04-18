import Ember from 'ember';

export default Ember.Route.extend({
	model:function(params){
		return this.store.find('company', params.id);
	},
	actions:{
		cancelEdit:function(){
			this.transitionTo('company.view', this.get('model.id'));
		},
		saveEdit:function(model){
			var that=this;
			model.save().then(function(){
				//SUCCESS
				that.transitionTo('company.view', model.get('id'));
			},function(){
				//FAIL
			});
		}
	}
});