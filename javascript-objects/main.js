var student = {
  firstName: 'Simon',
  lastName: 'Kim',
  age: 38
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'teacher';

console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Bronco',
  model: 'Ford',
  year: 1975
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;

console.log('color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle object:', vehicle);

var pet = {
  name: 'fido',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
