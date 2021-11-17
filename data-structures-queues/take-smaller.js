/* exported takeSmaller */

/*
compare first and second elements.

if first is smaller, return first
assign second to variable with dequeue
enqueue second to queue.

else if second is smaller, return second
assign first to variable with dequeue
enqueue first to queue.
*/

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.peek();
    const second = queue.peek();
    if (first < second) {
      queue.enqueue(second);
      return first;
    } else if (first > second) {
      queue.enqueue(first);
      return second;
    }
  }
}
