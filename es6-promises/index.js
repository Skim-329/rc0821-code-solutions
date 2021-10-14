const takeAChance = require('./take-a-chance');

const name = takeAChance('Simon');

name.then(value => {
  console.log(value);
});

name.catch(error => {
  console.error(error);
});
