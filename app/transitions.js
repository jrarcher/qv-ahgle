export default function(){
  this.transition(
    this.fromRoute('company.index'),
    this.toRoute('company.view'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}