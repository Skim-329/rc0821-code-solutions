/* exported capitalize */
/* Pseudo Code
Define a new function named capitalize with word parameter word that is a string.
Return the first character at index 0 with a capital letter, then concatenate that word with
the rest of the words from index 1 lowercased.
*/
function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
