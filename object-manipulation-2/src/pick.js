/* exported pick */
function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    var potentialProp = keys[i];
    if (source[potentialProp] !== undefined) {
      object[potentialProp] = source[potentialProp];
    }
  }
  return object;
}
