var contactform = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var formresults = {
    name: contactform.elements.name.value,
    email: contactform.elements.email.value,
    message: contactform.elements.message.value
  };
  console.log(formresults);
  document.querySelector('#contact-form').reset();
}

contactform.addEventListener('submit', handleSubmit);
