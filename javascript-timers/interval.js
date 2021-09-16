var startCount = setInterval(countDown, 1000);

var start = document.querySelector('h1');
var count = 4;

function countDown() {
  count--;
  start.textContent = count;
  if (count === 0) {
    start.textContent = '~Earth Beeeelooowww Us~';
    stopFunction();
  }
}

function stopFunction() {
  clearInterval(startCount);
}
