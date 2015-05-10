import Ember from 'ember';

export default Ember.Route.extend({
	model:function(params){
		return this.store.find('user', params.id);
	},
	actions:{
		cancelEdit:function(){
			this.transitionTo('user.view', this.get('model.id'));
		},
		saveEdit:function(model){
			var that=this;
			model.save().then(function(){
				//SUCCESS
				that.transitionTo('user.view', model.get('id'));
			},function(){
				//FAIL
			});
		}
	}
});