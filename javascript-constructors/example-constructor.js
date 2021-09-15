function ExampleConstructor() {

}

console.log('value of:', ExampleConstructor.prototype);
console.log('type of: ', typeof ExampleConstructor.prototype);

var Construct = new ExampleConstructor();

console.log('value of:', Construct);

console.log(Construct instanceof ExampleConstructor);
