var $tabcontainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabcontainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  var attribute = event.target.getAttribute('data-view');
  for (var x = 0; x < $view.length; x++) {
    if ($view[x].getAttribute('data-view') !== attribute) {
      $view[x].className = 'view hidden';
    } else {
      $view[x].className = 'view';
    }
  }
});
