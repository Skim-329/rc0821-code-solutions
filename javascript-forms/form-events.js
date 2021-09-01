function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
}

var username = document.querySelector('#user-name');
var email = document.querySelector('#user-email');
var textarea = document.querySelector('textarea');

username.addEventListener('focus', handleFocus);
username.addEventListener('blur', handleBlur);
username.addEventListener('input', handleInput);

email.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
email.addEventListener('input', handleInput);

textarea.addEventListener('focus', handleFocus);
textarea.addEventListener('blur', handleBlur);
textarea.addEventListener('input', handleInput);
