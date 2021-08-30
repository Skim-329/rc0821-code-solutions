function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log('target', event);
}
var $a = document.querySelector('.click-button');
$a.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log('target', event);
}
var $b = document.querySelector('.hover-button');
$b.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log('target', event);
}
var $c = document.querySelector('.double-click-button');
$c.addEventListener('dblclick', handleDoubleClick);
