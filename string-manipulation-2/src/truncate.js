/* exported truncate */
function truncate(length, string) {
  var newString = string.substr(0, length) + '...';
  return newString;
}
