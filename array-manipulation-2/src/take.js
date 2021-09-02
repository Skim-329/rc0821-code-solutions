/* exported take */
/*
Define a function named take with two parameters, array, an array, and count, a positive integer.
Assign an empty array to a variable named newArray.
Define a for loop that iterates through the array, with the condition that i < count.
Assign array[i] to variable named x.
Create an if else statement where var x is pushed into var newArray if length of array is greater than 0
and no value is pushed if not.
Return newArray.
*/

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    var x = array[i];
    if (array.length > 0) {
      newArray.push(x);
    } else {
      newArray.push();
    }
  }
  return newArray;
}
