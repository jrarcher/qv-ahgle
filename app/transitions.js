export default function(){
  this.transition(
    this.fromRoute('company.index'),
    this.toRoute('company.view'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
  	this.fromRoute('company.index'),
  	this.toRoute('company.new'),
  	this.use('toLeft'),
  	this.reverse('toRight')
  	);

  this.transition(
    this.fromRoute('user.index'),
    this.toRoute('user.view'),
    this.use('toLeft'),
    this.reverse('toRight')
    );
}