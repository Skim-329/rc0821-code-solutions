/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sum = numbers.reduce(function (a, b) {
      return a + b;
    }, 0);
    return sum;
  },
  getAverage: function (numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    var avg = total / numbers.length;
    return avg;
  }
};
