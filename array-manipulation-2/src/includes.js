/* exported includes */
function includes(array, value) {
  var returnBoolean = false;
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      returnBoolean = true;
    }
  }
  return returnBoolean;
}
