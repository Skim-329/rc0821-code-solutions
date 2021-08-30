/* exported reverseWord */
/* Pseudo Code
Define a new function named reverseWord with one parameter word.
Define a for loop that begins at the last character of the string
and decrements after each iteration.
*/

function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
