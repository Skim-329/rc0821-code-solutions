/* exported numVowels */
/*
Define a new function named numVowels with parameter of a string.
Assign 0 to new variable numberOf.
Assign lowercased string to new variable lowerCase.
Loop through each index of lowerCase.
Assign lowerCase at index to new variable currentLetter.
Compare currentLetter to list of lower cased vowels.
Increment numberOf each time there is a vowel.
Return numberOf.
*/
function numVowels(string) {
  var numberOf = 0;
  var lowerCase = string.toLowerCase();
  for (var x = 0; x < lowerCase.length; x++) {
    var currentLetter = lowerCase[x];
    if (currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'i' || currentLetter === 'o' || currentLetter === 'u') {
      numberOf++;
    }
  }
  return numberOf;
}
