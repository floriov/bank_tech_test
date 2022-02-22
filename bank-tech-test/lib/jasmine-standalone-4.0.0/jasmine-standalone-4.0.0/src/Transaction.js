

class Transaction {
  constructor (amount, newBalance, date = new Date()) {
    this.amount = amount
    this.newBalance = newBalance;
    this.date = date;
  };


  amount() {
    return this.amount;
  } 
 
  newBalance = function () {
    return this.newBalance;
  };

  date = function () {
    return this.date;
  };

  isDeposit = function () {
    return this.amount >= 0;
  };

  isWithdrawal = function () {
    return !this.isDeposit();
  };


}
module.exports = Transaction;
