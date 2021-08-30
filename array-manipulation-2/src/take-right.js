/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    var x = array[i];
    if (array.length > 0) {
      newArray.push(x);
    } else {
      newArray.push();
    }
  }
  return newArray;
}
