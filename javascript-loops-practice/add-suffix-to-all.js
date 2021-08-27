/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newarray = [];
  for (var i = 0; i < words.length; i++) {
    newarray.push(words[i] + suffix);
  }
  return newarray;
}
