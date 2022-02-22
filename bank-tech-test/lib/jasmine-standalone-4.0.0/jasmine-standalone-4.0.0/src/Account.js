
class Account {
    constructor (statementPrinter) {
      this.balance = 0
      this.transactions = [];
      this.statementPrinter = statementPrinter;
    };

  statementPrinter() {
    return this.statementPrinter;
  }

  balance() {
    return this.balance;
  }

  transaction() {
    return this.transaction;
  }


  deposit(amount) {
    this.balance += amount
    return this.balance
    this.transaction.push(new Transaction(amount, this.balance))
  }

  withdraw(amount) {
    this.balance -= amount
   return this.balance
   this.transactions.push(new Transaction(-amount, this.balance))
  }

  
};




