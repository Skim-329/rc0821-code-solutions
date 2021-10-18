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

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(sum);

const product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log(product);

const net = (previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  }
  return previousValue - currentValue.amount;
};
const balance = account.reduce(net, 0);
console.log(balance);

const composite = traits.reduce((previousValue, currentValue) => {
  return Object.assign(previousValue, currentValue);
}, {});
console.log(composite);
