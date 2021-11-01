/* exported defaults */
function defaults(target, source) {
  const targetKey = [];
  const sourceKey = [];

  for (var key in target) {
    targetKey.push(key);
  }
  for (var kee in source) {
    sourceKey.push(kee);
  }

  for (var i = 0; i < sourceKey.length; i++) {
    if (targetKey.indexOf(sourceKey[i]) === -1) {
      target[sourceKey[i]] = source[sourceKey[i]];
    }
  }
}
