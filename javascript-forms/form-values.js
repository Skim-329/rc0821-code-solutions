var contactform = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var formresults = {
    name: contactform.elements.name.value,
    email: contactform.elements.email.value,
    message: contactform.elements.message.value
  };
  console.log('results:', formresults);
  contactform.reset();
}

contactform.addEventListener('submit', handleSubmit);
