/* exported maxValue */

function maxValue(stack) {
  let largestNum = -Infinity;
  let currentNum = stack.pop();
  while (currentNum !== undefined) {
    if (currentNum > largestNum) {
      largestNum = currentNum;
    }
    currentNum = stack.pop();
  }
  return largestNum;
}
