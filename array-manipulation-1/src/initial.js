/* exported initial */
/* Pseudo Code
Define a new function named initial with a single parameter array.
Define a new variable that will contain the array of elements minus the last.
Define a for loop that will go through the array minus the last index element.
Push the result of the for loop into the variable containing the new array literal.
Return a new array containing all elements of array except the last.
*/
function initial(array) {
  var nolast = [];
  for (var i = 0; i < array.length - 1; i++) {
    nolast.push(array[i]);
  }
  return nolast;
}
