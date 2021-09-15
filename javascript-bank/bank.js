/* exported Bank */
function Bank() {
  this.nextAccountNumber = nextAccountNumber;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if ((Number.isInteger(balance)) && (balance > 0)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.push(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
  }
  return this.number;
};
