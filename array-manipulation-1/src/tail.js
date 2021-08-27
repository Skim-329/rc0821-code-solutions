/* exported tail */
/* Pseudo Code
Define a function named tail with a single js array.
Define an array literal to contain the values of the new array.
Define a for loop that goes through the array starting at index 1.
Push the elements of the new array into the variable named nofirst.
Return a new array containing all elements of array after the first element.
*/
function tail(array) {
  var nofirst = [];
  for (var i = 1; i < array.length; i++) {
    nofirst.push(array[i]);
  }
  return nofirst;
}
