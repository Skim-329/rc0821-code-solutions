/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var arrayOne = [];
    for (var x = i; x < i + size; x++) {
      if (x < array.length) {
        arrayOne.push(array[x]);
      }
    }
    newArray.push(arrayOne);
  }
  return newArray;
}
