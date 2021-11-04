/* exported invert */
function invert(source) {
  const object = {};
  for (var key in source) {
    object[source[key]] = key;
  }
  return object;
}
