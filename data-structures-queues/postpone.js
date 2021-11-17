/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const front = queue.dequeue();
    return queue.enqueue(front);
  } else {
    return;
  }
}
