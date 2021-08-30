/* exported getKeys */
/*
Define a function named getKeys with one parameter of object.
Assign an empty array to a new variable keys.
Define a for... in loop with var key in object.
Push key into variable keys.
Return keys.
*/

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
