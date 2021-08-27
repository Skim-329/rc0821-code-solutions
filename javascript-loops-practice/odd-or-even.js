/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddeven = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i]) % 2 === 0) {
      oddeven.push('even');
    } else {
      oddeven.push('odd');
    }
  }
  return oddeven;
}
