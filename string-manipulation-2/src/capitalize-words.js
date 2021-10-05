/* exported capitalizeWords */
function capitalizeWords(string) {
  var newString = string.toLowerCase().split(' ');
  for (var i = 0; i < newString.length; i++) {
    newString[i] = newString[i].charAt(0).toUpperCase() +
    newString[i].substring(1);
  }
  return newString.join(' ');
}
