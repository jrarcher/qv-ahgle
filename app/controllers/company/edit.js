import Ember from 'ember';

export default Ember.Controller.extend({
	dirty:Ember.computed.or('model.isDirty', 'model.address.isDirty')
});