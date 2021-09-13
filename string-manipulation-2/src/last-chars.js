/* exported lastChars */
function lastChars(length, string) {
  var newString;
  if (length > string.length) {
    newString = string;
  } else {
    newString = string.substr(string.length - length, string.length - 1);
  }
  return newString;
}
