var background = document.querySelector('.container');
var lightbulb = document.querySelector('.dot');

lightbulb.addEventListener('click', function (event) {
  if (lightbulb.className === 'dot') {
    background.className = 'container bright';
    lightbulb.className = 'dot on';
  } else {
    background.className = 'container';
    lightbulb.className = 'dot';
  }
});
