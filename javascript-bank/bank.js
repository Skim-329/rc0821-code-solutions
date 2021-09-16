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
    if (this.accounts[i].number === number) {
      returnValue = this.accounts[i];
    }
  }
  return returnValue;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    totalAssets += this.accounts[i].getBalance();
  }
  return totalAssets;
};
