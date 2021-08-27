/* exported compact */
/* Pseudo Code
Define a new function named compact with a single parameter js array.
Define new variable falsy without assignment.
Define new variable newArray as an empty literal array.
Define a for loop to determine which values in array are falsy
and remove all falsy values.
Return new array without falsy values
*/
function compact(array) {
  var falsy;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    falsy = Boolean(array[i]);
    if (falsy === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
