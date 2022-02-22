
describe('Account', function() {
  var statementPrinter;
  var account;

  beforeEach(function() {
    statementPrinter = {};
    account = new Account(statementPrinter);
  })

  it('default balance is £0', function() {
    expect(account.balance).toEqual(0);
  })

  it('initialize with an empty transaction', function() {
    expect(account.transactions).toEqual([]);
  });

  it('prints a statements', function() {
    expect(account.statementPrinter).toEqual(statementPrinter)
  })

  describe('Deposit', function() { 
    it('is possible to deposit money', function() {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    })
    // it('adds a transaction to transaction list', function() {
    //   account.deposit(100)
    //   expect(account.transactions().length).toEqual(1);
    // })
    

      
  })

  describe('Withdrawal', function() { 
    it('is possible to withdraw money', function() {
      account.balance = 100
      account.withdraw(50);
      expect(account.balance).toEqual(50);
    })
    // it('adds a transaction to transaction list', function() {
    //   account.deposit(20);
    //   account.withdraw(5);
    //   expect(account.transactions().length).toEqual(2);
    // });
  
  })

})