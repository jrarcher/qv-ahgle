import DS from "ember-data";
var attr = DS.attr;
export
default DS.Model.extend({
	num: attr('string'),
	ext: attr('string'),
	type: attr('string'),
	country: attr('string'),
	prettyPhone: function() {
		var text = this.get('num').replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2.$3");
		if (this.get('ext')){
			text += ' x' + this.get('ext');
		}
		return text;
	}.property('num', 'ext')
});