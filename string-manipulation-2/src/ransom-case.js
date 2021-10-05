/* exported ransomCase */
/*
Define new function named ransomCase with parameter string.
Create a new variable lowerCase that is assigned the returned value of string lowercased.
Capitalize every odd index for the length of the string.
return string.
*/

function ransomCase(string) {
  var lowerCase = string.toLowerCase();
  var newString = '';

  for (var i = 0; i < lowerCase.length; i++) {
    var currentLetter = lowerCase[i];
    if (i % 2 !== 0) {
      newString += currentLetter.toUpperCase();
    } else {
      newString += currentLetter;
    }
  }
  return newString;
}
