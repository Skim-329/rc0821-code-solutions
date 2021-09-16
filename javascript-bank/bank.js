/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  var returnValue = null;
  if ((Number.isInteger(balance)) && (balance > 0)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    returnValue = newAccount.number;
  }
  return returnValue;
};

Bank.prototype.getAccount = function (number) {
  var returnValue = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts.number[i] === number) {
      returnValue = i;
    }
  }
  return returnValue;
};
