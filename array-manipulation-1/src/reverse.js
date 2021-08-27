/* exported reverse */
/* Pseudo Code
Define a new function named reverse with a parameter single array.
Assign an empty array literal to a new variable.
Define a for loop that begins at the last index of the array and decrements
until i is greater than or less than o.
Push the result of the for loop into the variable reverse.
Return a new array containing all elements of array in reverse order.
*/
function reverse(array) {
  var reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}
