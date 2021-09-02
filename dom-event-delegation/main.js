function clickEvent(event) {

  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var $closest = event.target.closest('.task-list-item');
    console.log('task-list-item:', $closest);
    $closest.remove();
  }
}

var $tasklist = document.querySelector('.task-list');

$tasklist.addEventListener('click', clickEvent);
