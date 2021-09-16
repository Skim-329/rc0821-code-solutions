function displayMessage() {
  var message = document.querySelector('h1');
  message.textContent = 'Hello There';
}

setTimeout(displayMessage, 2000);
