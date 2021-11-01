/* exported omit */
function omit(source, keys) {
  const object = {};

  for (var key in source) {
    if (keys.indexOf(key) === -1) {
      object[key] = source[key];
    }
  }
  return object;
}
