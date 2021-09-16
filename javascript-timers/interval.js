function countDown() {
  var count = document.querySelector('h1');
  count.textContent = '3';
}

setInterval(countDown, 1000);
