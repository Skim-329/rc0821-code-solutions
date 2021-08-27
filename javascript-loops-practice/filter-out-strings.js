/* exported filterOutStrings */
function filterOutStrings(values) {
  var nostrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      nostrings.push(values[i]);
    }
  } return nostrings;
}
