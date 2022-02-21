describe('Account', function() {
    

  beforeEach(function() {
    account = new Account()
  })

  it('default balance is £0', function() {
    expect(account.balance).toEqual(0);
  })

  it('initialize with an empty transaction', function() {
    expect(account.transaction).toEqual([]);
  });

  describe('Deposit', function() { 
    it('is possible to deposit money', function() {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    })
      
  })

  describe('Withdraw', function() { 
    it('is possible to withdraw money', function() {
      account.balance = 100
      account.withdraw(50);
      expect(account.balance).toEqual(50);
    })
  })

})