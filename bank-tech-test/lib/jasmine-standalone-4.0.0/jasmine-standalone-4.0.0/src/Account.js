
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

  transactions() {
    return this.transactions;
  }


  deposit(amount) {
    
    this.balance += amount
    this.transactions.push(new Transaction(amount, this.balance))
    return this.balance
  }

  withdraw(amount) {
    
    this.balance -= amount
    this.transactions.push(new Transaction(-amount, this.balance))
    return this.balance
  }

  summary() {
    this.statementPrinter.print(this.transactions.reverse());
  };

  insufficientFunds(amount) {
    return amount > this.balance;
  }
  
};




