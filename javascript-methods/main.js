var x = 1;
var y = 2;
var z = 3;

var maximumValue = Math.max(x, y, z);
console.log('maximumValue is:', maximumValue);

var heroes = ['Ironman', 'Hulk', 'Doctor. Strange', 'Wonder Woman'];

var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex is:', randomIndex);

var library = [{ title: 'Origami', author: 'Foldie Hawn' },
  { title: 'Fleas', author: "Adam Had'em" },
  { title: 'Fruit or Vegetable?', author: 'Tom Ato' }];

var lastBook = library.pop();
console.log('lastBook is:', lastBook);

var firstBook = library.shift();
console.log('firstBook is:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Simon Kim';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
