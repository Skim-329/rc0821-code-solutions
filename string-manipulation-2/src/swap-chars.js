/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var x = 0; x < string.length; x++) {
    if (x === firstIndex) {
      newString += string[secondIndex];
    } else if (x === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[x];
    }
  }
  return newString;
}
