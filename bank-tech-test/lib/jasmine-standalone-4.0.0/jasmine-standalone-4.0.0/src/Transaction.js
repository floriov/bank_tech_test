class Transaction {
  constructor (amount, newBalance, date = new Date()) {
    this.amount = amount
    this.newBalance = newBalance;
    this.date = date;
  };


  amount() {
    return this.amount;
  } 
 
  newBalance() {
    return this.newBalance;
  };

  date() {
    return this.date;
  };

  isDeposit() {
    return this.amount >= 0;
  };

  isWithdrawal() {
    return !this.isDeposit();
  };


}

