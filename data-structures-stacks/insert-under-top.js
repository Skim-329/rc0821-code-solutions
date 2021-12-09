/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const topOfStack = stack.pop();
  if (topOfStack === undefined) {
    return;
  }
  stack.push(value);
  stack.push(topOfStack);
}
