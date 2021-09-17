function getUserData() {
  var userList = document.querySelector('#user-list');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var newEl = document.createElement('li');
      var newText = document.createTextNode(xhr.response[i].name);
      newEl.appendChild(newText);
      userList.appendChild(newEl);
    }
  });
  xhr.send();
}
getUserData();
