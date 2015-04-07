import DS from "ember-data";
import { moment } from 'ember-moment/computed';

var attr = DS.attr;
export default DS.Model.extend({
	parent:attr('string'),
	name: attr('string'),
	type: attr('string'),
	description: attr('string'),
	created: attr('date'),
	address: DS.belongsTo('address', {async:true}),
	phone: DS.hasMany('phone', {embedded: 'always'}),
	prettyCreated:moment('created', 'MM/DD/YYYY')
});