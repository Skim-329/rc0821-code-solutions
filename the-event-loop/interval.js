let currentCount = 3;
const counter = setInterval(countDown, 1000);

function countDown() {
  console.log(currentCount);
  currentCount = currentCount - 1;
  if (currentCount === 0) {
    clearInterval(counter);
    console.log('Blast off!');
  }
}
