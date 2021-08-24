function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertResults);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
var greetname = greet('Dani');
console.log('Greeting:', greetname);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var area = getArea(8, 24);
console.log('The area is:', area);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var firstNameResult = getFirstName({ firstName: 'Kobe', lastName: 'Bryant' });
console.log('The first name is:', firstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var getLastElementResults = getLastElement(['Pepperoni', 'sausage', 'pineapples', 'ham']);
console.log('The last element is:', getLastElementResults);
