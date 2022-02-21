describe("Account", function() {
    var account;

  beforeEach(function() {
    account = new Account()
  })

  it('default balance is £0', function() {
    expect(account.balance).toEqual(0);
  })

  describe('Deposit', function() { 
    it('is possible to deposit money', function() {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    })
  })
})