/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const topOfStack = stack.pop();
  const secondElement = stack.peek();
  if (topOfStack === undefined) {
    return;
  }
  stack.push(topOfStack);
  return secondElement;
}
