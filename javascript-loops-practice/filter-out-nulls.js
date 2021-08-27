/* exported filterOutNulls */
function filterOutNulls(values) {
  var nonull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i]) {
      nonull.push(values[i]);
    }
  } return nonull;
}
