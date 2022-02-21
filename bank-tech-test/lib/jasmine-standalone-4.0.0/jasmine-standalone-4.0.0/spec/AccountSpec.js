describe("Account", function () {
    
  beforeEach(function () {
    account = new Account()
  })

  it('Account starts with a balance of £0.00', function () {
    expect(account.balance).toEqual(0.00)
  })
})