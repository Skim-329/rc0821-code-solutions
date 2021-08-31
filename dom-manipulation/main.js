var counter = 0;

var $hotbutton = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');

$hotbutton.addEventListener('click', function (event) {
  counter++;
  var temp;
  if (counter < 4) {
    temp = 'cold';
  } else if (counter < 7) {
    temp = 'cool';
  } else if (counter < 10) {
    temp = 'tepid';
  } else if (counter < 13) {
    temp = 'warm';
  } else if (counter < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  $hotbutton.className = 'hot-button ' + temp;
  $clickcount.textContent = 'Clicks: ' + counter;
});
