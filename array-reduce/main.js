const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (previousValue, currentValue) => previousValue + currentValue;
console.log(numbers.reduce(sum));

const product = (previousValue, currentValue) => previousValue * currentValue;
console.log(numbers.reduce(product));

const balance =
(account.filter(account => account.type === 'deposit')
  .map(account => account.amount)
  .reduce((acc, amt) => acc + amt)) -
(account.filter(account => account.type === 'withdrawal')
  .map(account => account.amount)
  .reduce((acc, amt) => acc + amt));
console.log(balance);

const composite =
(traits.map(traits => traits.color)) +
  (traits.map(traits => traits.type)) +
  (traits.map(traits => traits.name)) +
  (traits.map(traits => traits.level)) +
  (traits.map(traits => traits.trainer));
console.log(composite);
