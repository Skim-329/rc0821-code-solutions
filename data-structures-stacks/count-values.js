/* exported countValues */

function countValues(stack) {
  let newStack = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    newStack++;
  }
  return newStack;
}
