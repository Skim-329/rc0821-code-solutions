const fs = require('fs');
const randomNum = Math.random();
const r = randomNum.toString();

fs.writeFile('random.txt', r, err => {
  if (err) throw err;
});
