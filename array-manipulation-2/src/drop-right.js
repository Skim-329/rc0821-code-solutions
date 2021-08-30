/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    var x = array[i];
    newArray.push(x);
  }
  return newArray;
}
