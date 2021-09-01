function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of name:', event.target.value);
}

var input = document.querySelector('input');
var textarea = document.querySelector('textarea');

input.addEventListener('focus', handleFocus);
input.addEventListener('blur', handleBlur);
input.addEventListener('input', handleInput);

textarea.addEventListener('focus', handleFocus);
textarea.addEventListener('blur', handleBlur);
textarea.addEventListener('input', handleInput);
