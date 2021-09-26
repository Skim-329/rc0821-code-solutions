/* exported omit */
function omit(source, keys) {
  var object = {};
  var propArrays = Object.keys(source);
  for (var i = 0; i < propArrays.length; i++) {
    if (!keys.includes(propArrays[i])) {
      object[propArrays] = source[propArrays[i]];
    }
  }
  return object;
}
