/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var arrayOne = [];
    for (var x = i; x < size - 1; x++) {
      arrayOne.push(x);
    }
    newArray.push(arrayOne);
  }
  return newArray;
}
