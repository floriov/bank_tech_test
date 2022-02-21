class Account {
    constructor () {
      this.balance = 0
      this.transaction = [];
    };

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    this.balance -= amount
  }
};



