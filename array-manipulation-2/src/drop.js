/* exported drop */
/*
Define a function named drop with two parameters of (array) array and (string) count.
Assign an empty array to variable newArray.
Create a for loop that iterates through the array starting at the index of count till it is less than the length of the array.
Assign array at i to variable x.
Push x into newArray.
Return newArray.

*/
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    var x = array[i];
    newArray.push(x);
  }
  return newArray;
}
